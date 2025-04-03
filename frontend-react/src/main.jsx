import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";


const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-y5bhe53edpgjraqa.us.auth0.com/api/v2/", // Must match Auth0 API Identifier
      scope: "read:roles openid profile email"
  }}
  >
    <App />
  </Auth0Provider>
);
