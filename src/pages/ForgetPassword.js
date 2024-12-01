import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const ForgetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isResetSent, setIsResetSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5001/api/forget-password", data);
      console.log(response.data.message);
      if (response.status === 200 && response.data.message === "Reset link sent successfully.") {
        setIsResetSent(true);
      } else {
        setErrorMessage("Failed to send reset link. Please try again later.");
      }
    } catch (error) {
      console.error("Error occurred while requesting password reset:", error);
      setErrorMessage("Failed to send reset link. Please try again later.");
    }
  };

  return (
    <div>
     

      <div className="main-login d-flex justify-content-center"style={{marginTop:'200px'}}> {/* Center content horizontally */}
        {isResetSent ? (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="modalTitle" > {/* Use Bootstrap modal */}
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalTitle">Reset Link Sent</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setIsResetSent(false)}></button>
                </div>
                <div className="modal-body">
                  <p>Check your email for instructions to reset your password.</p>
                </div>
                <div className="modal-footer">
                  <button  type="button" className="btn btn-secondary "  data-bs-dismiss="modal" onClick={() => setIsResetSent(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
              {/* Email input */}
              <input
                placeholder="Email"
                required
                type="email"
                {...register("email", { required: true })}
              />
              <br />

              {/* Display validation errors */}
              {errors.email && (
                <p className="req">Please enter your email</p>
              )}

              {/* Submit button */}
              <input type="submit" value="Send Reset Link" />
            </form>

            {/* Display error message if any */}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            
            
          </div>
        )}
      </div>
    </div>
  );
}
export default ForgetPassword;
