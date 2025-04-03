const transporter = require("../config/emailConfig");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

class AuthController {
  async handleAuthCallback(req, res) {
    try {
      console.log("User", req.user); 
      let userEmail = req.user?.email;

      // If email is not in token, fetch it from Auth0
      if (!userEmail) {
        const userInfoResponse = await axios.get(
          "https://dev-y5bhe53edpgjraqa.us.auth0.com/userinfo",
          { headers: { Authorization: req.headers.authorization } }
        );
        userEmail = userInfoResponse.data?.email;
      }

      // If email is still not found, return error
      if (!userEmail) {
        return res.status(400).json({ error: "Email not found in token" });
      }

      const userRoles = req.user["https://my-app.example.com/roles"] || [];
      console.log("User Roles:", userRoles);

      // Check if user has Admin role
      if (!userRoles.includes("Admin")) {
        return res.status(403).json({ message: "Unauthorized: Admin access required" });
      }

      const token = req.headers.authorization;

      // Send token via email
      await transporter.sendMail({
        from: `"Auth System" <${process.env.EMAIL_FROM}>`,
        to: userEmail,
        subject: "Please find your Auth0 Access Token",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #007bff;">🔐 Secure Access Token</h2>
            <p>Hello <strong>${userEmail}</strong>,</p>
            <p>Here is your Auth0 access token:</p>
            <pre style="background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto;">${token}</pre>
            <p><strong> Please keep this token secure and do not share it with anyone.</strong></p>
            <p>If you did not request this, please ignore this email.</p>
            <hr style="border: none; border-top: 1px solid #ddd;">
            <p style="font-size: 14px; color: #666;">Best regards, <br> <strong>Auth System Team</strong></p>
          </div>
        `,
      });

      res.json({ message: "Email sent successfully!", roles: userRoles });

    } catch (error) {
      console.error("Error in Auth Callback:", error);
      res.status(500).json({ error: "An error occurred while handling the authentication callback" });
    }
  }
}

module.exports = new AuthController();
