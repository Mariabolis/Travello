import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../Styles/register.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Email or Password incorrect");
      }
      window.location.href = "/Home"; // Redirect to home page
    } catch (error) {
      setError(error.message);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <video autoPlay muted loop id="videoEgypt">
          <source src={process.env.PUBLIC_URL + "EGYPT 2021 - Cinematic Video 4K.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="" className="navbar-brand p-0"></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
        </nav>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
          <h2>Hello User in Travello</h2>
          <input
            placeholder="Email"
            required
            type="email"
            {...register("email", { required: true })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            required
            type="password"
            {...register("password", { required: true })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {errors.email && <p className="req">Please enter your email</p>}
          <input type="submit" value="Login" onClick={handleLogin} />
          <div className="more">
            <Link to="/ForgetPassword" className="regest">Forgot Your Password?</Link>
            </div>
            <div className="more">

            <Link to="/Regestration" className="regest">Don't have an account? Sign up here.</Link>
            </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default LogIn;
