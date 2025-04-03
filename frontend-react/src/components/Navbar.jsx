import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(null);
  const [roles, setRoles] = useState([]);

  // Function to fetch access token & roles
  const fetchUserRoles = useCallback(async () => {
    if (!isAuthenticated) return;

    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://dev-y5bhe53edpgjraqa.us.auth0.com/api/v2/",
        scope: "read:roles openid profile email",
      });
      if(!accessToken) throw new Error('Access token is null or empty');

      setToken(accessToken);

      const decoded = jwtDecode(accessToken);
      //if(!decoded) throw new Error('User roles are null or empty');
      const userRoles = decoded["https://my-app.example.com/roles"] || [];
      setRoles(userRoles);
    } catch (error) {
      console.error("Error fetching user roles:", error);
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    fetchUserRoles();
  }, [fetchUserRoles]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Auth0 App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link text-white">Welcome, {user?.name}!</span>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                      className="btn btn-light"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <button onClick={loginWithRedirect} className="btn btn-light">Login</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="container text-center mt-5">
        <h1 className="mb-4 text-primary">Auth0 Authentication</h1>

        {isAuthenticated ? (
          <>
            <p>Welcome, <strong>{user?.name}</strong>!</p>
            <p><strong>Role:</strong> {roles.length > 0 ? roles.join(", ") : "No role assigned for this user"}</p>

            {token && (
              <div className="alert alert-info mt-3">
                <p><strong>Access Token:</strong></p>
                <p className="text-break">{token?token: "Access token is null or empty"}</p>
              </div>
            )}
          </>
        ) : (
          <p className="text-muted">Please log in to access your account details.</p>
        )}
      </div>
    </>
  );
};

export default Navbar;
