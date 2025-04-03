Frontend(React)- deployed on the below URL-
https://frontend-react-auth0-aabciwc3g-amans-projects-a77f4120.vercel.app/
1.login page, email to user on signup and login with access token
2.logout page with access token and logged in user roles displayed

API documentation-Please find the documentation link- https://web.postman.co/documentation/28442885-2efbd592-7640-4fcc-8def-fafde54c9550/publish?workspaceId=5c94b499-088f-4cd4-8a1f-3535ffc5c7ca
also present in the server folder exported as postman_collection.json

### GETTING ERRORS IN NEXTJS which i wasn't able to resolve
Made this project in Next js as well but getting error for @auth0/nextjs-auth0/client. Client is not coming as a dependency, if it resolves, then getting an error in {useUser} import so, i tried making the project with APP router and as well as without app router. With app router JWT token is not getting authorized, getting unathorized error. I have made the code for NEXTJS in the folder frontend-nextjs-aman. Hence, i went on with building it in react using vite.

##USING REACT

1.used vite to create react app, typescript, react-router-dom, bootstrap
2.used Auth0Provider in main.jsx.
3.app.jsx contain navbar component rendered
4.auth folder contains the code for without role based access and with role based access implemented.
5.Implemented login and logout functionality in navbar.jsx inside components folder contains the whole code being used.

####to use react with auth0####

1.create a single page application with auth0
2.go to application settings->Application URIs->add 
Allowed Callback URLs: http://localhost:5173
Allowed Logout URLs: http://localhost:5173
Allowed Web Origins: http://localhost:5173
3.set up env values 
VITE_AUTH0_DOMAIN=dev-y5bhe53edpgjraqa.us.auth0.com
VITE_AUTH0_CLIENT_ID=YCXezqMPn9ODLjYSAkuMg59uMHspNsYl
4.enable Cross-Origin Authentication from apllication settings in auth0
5.Create roles inside User management->roles of your project
6.create users with roles
7.add action->library 2 action on post-login request 
  i)add default role to user for anybody who sign's up 
  ii)add role to user based on email, passing it as a parameter in the action
8.create a new action->library 2 action on post-login request
9.add these custom triggers created by us.


//to no go into details and create directly
React + Node.js Auth0 Authentication Project

This project is a React frontend with Auth0 authentication and a Node.js backend. It uses Bootstrap for styling and supports role-based authentication.

🚀 Project Setup

1️⃣ Clone the Repository

git clone https://github.com/your-repo.git
cd your-repo

2️⃣ Install Dependencies

Backend:

cd server
npm install

Frontend:

cd ../frontend-react
npm install

🔐 Auth0 Configuration

3️⃣ Create an Auth0 Application

Sign up or log in to Auth0.

Navigate to Applications → Create Application.

Select Single Page Web Applications.

In the Settings tab, note down the Domain, Client ID, and Client Secret.

4️⃣ Configure Allowed URLs

Add these URLs in Auth0 Settings:

Allowed Callback URLs: http://localhost:5173

Allowed Logout URLs: http://localhost:5173

Allowed Web Origins: http://localhost:5173

5️⃣ Set Up Environment Variables

Backend (server/.env):

PORT=5000
MONGO_URI=your-mongodb-uri
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
AUTH0_AUDIENCE=https://your-auth0-domain/api/v2/
EMAIL_FROM=your-email@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password

Frontend (frontend-react/.env):

VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_AUDIENCE=https://your-auth0-domain/api/v2/

▶️ Running the Project

Start Backend

cd server
npm start

Start Frontend

cd frontend-react
npm run dev

Now, open http://localhost:5173 in your browser.

📌 Features

✅ Login & Logout with Auth0
✅ Fetch & Display User Roles
✅ Secure API with JWT Authentication only accessible by admins
✅ Role-Based Access Control
✅ Email Notifications (SMTP / Nodemailer) with token
✅ Bootstrap UI
