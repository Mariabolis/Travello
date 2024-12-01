import React from "react";
import { useForm } from "react-hook-form";
import "../Styles/Login.css";

const Registration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        window.location.href = "/Home"; // Redirect to login page on successful registration
      } else {
        console.error(result.error); // Log error if registration fails
      }
    } catch (error) {
      console.error("Error:", error); // Log any other errors
    }
  };

  return (
    <div className="Registration">
      <div className="container-fluid position-relative p-0">
        <div className="video-container">
          <video autoPlay muted loop id="videoEgypt">
            <source src={process.env.PUBLIC_URL + "ee94adb62d681b80952a556c751a0182.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
        </nav>
      </div>
      <div className="register-container">
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
          <h2>Register To Travello</h2>
          <input
            placeholder="Name"
            required
            {...register("name")}
          />
          <input
            placeholder="Email"
            required
            {...register("email")}
          />
          <input
            placeholder="Password"
            type="password"
            required
            {...register("password")}
          />
          <br />
          {errors.email && <p className="req">Please enter your email</p>}
          <input type="submit" value="Register" />
          <div className="more">
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
