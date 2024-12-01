import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Login.css"
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState(""); // Token state

  const [isResetSuccessful, setIsResetSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if passwords match
      if (newPassword !== confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      // Send request to reset password with token in the body
      const response = await axios.post(`http://localhost:5001/api/reset-password`, {
        email,
        newPassword,
        token, // Include token in the request body
      });
      
      if (response.status === 200 && response.data.message === "Password reset successfully.") {
        setIsResetSuccessful(true);
      } else {
        setErrorMessage("Failed to reset password. Please try again later.");
      }
    } catch (error) {
      console.error("Error occurred while resetting password:", error);
      setErrorMessage("Failed to reset password. Please try again later.");
    }
  };

  return (
    <div>
       <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        {/* Hero header content */}
      </div>
      <div className="main-login"style={{marginLeft:'450px'}}>
      {isResetSuccessful ? (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="modalTitle">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalTitle">Password Reset Successful</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsResetSuccessful(false)}></button>
                </div>
                <div className="modal-body">
                    <p>Your password has been successfully reset.</p>
                </div>
                <div className="modal-footer">
                    <Link to={"/"} className="btn btn-primary">Back to Login</Link>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setIsResetSuccessful(false)}>Close</button>
                </div>
            </div>
        </div>
    </div>
) : (
          <div>
            <form onSubmit={handleSubmit} action="" method="post">
              <input
                placeholder="Email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                placeholder="Token"
                required
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)} // Update token state
              />
              <br />
              <input
                placeholder="New Password"
                required
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <br />
              <input
                placeholder="Confirm New Password"
                required
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br />
              <input type="submit" value="Reset Password" />

            </form>
            {errorMessage && <p className="error">{errorMessage}</p>}
          </div>
          
        )}
      </div>
    </div>
  );
};

export default ResetPassword;