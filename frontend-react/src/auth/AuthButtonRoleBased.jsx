import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";

function AuthButton1() {
  const { user, isAuthenticated } = useAuth0();

  if (user) {
    console.log(user)
    console.log(user[namespace])
    // Check if roles are present
    if (user && user[namespace]) {
      const roles = user[namespace];
      console.log("User Roles:", roles);
      // Use the roles to conditionally render content or logic
    }
  }
  return (
    <h1>user</h1>
  );
}
const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    console.log(user)
    //console.log(user[namespace])
    const getToken = async () => {
      if (!isAuthenticated) return;

      try {
        //const acctoken = await getAccessTokenSilently();
        const acctoken = await getAccessTokenSilently({
          audience: "https://dev-y5bhe53edpgjraqa.us.auth0.com/api/v2/",
          scope: "read:roles openid profile email"
      });
        setToken(acctoken);        
        const decoded = jwtDecode(acctoken);
        console.log(decoded,"decoded")
        const userRoles = decoded["https://my-app.example.com/roles"] || [];
        //console.log(userRoles)
        console.log(userRoles,"userroles")
        setRoles(userRoles);
      } catch (error) {
        console.error("Failed to get access token:", error);
      }
    };

    getToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 text-primary">Auth0 Authentication</h1>

      {isAuthenticated ? (
        <div>
          <p>Welcome, <strong>{user?.name}</strong>!</p>
          <p><strong>Role:</strong> {roles.length > 0 ? roles.join(", ") : "No role assigned"}</p>

          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="btn btn-danger mt-3"
          >
            Logout
          </button>

          {token && (
            <div className="alert alert-info mt-3">
              <p><strong>Access Token:</strong></p>
              <p className="text-break">{token}</p>
            </div>
          )}
        </div>
      ) : (
        <button onClick={loginWithRedirect} className="btn btn-primary">
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
