import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const [token, seToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const acctoken = await getAccessTokenSilently();
          seToken(acctoken);
        } catch (err) {
          console.error("Error fetching token:", err);
        }
      }
    };

    fetchToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4 text-primary">React Auth0 Authentication</h1>

      {isAuthenticated ? (
        <>
          <p className="mt-3">Welcome, <strong>{user?.name}</strong>!</p>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            className="btn btn-danger mt-3"
          >
            Logout
          </button>

          {token && (
            <div className="alert alert-info mt-3">
              <strong>Access Token:</strong>
              <p className="text-break">{token}</p>
            </div>
          )}
        </>
      ) : (
        <button onClick={() => loginWithRedirect()} className="btn btn-primary">
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
