import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import AxiosInstance from "../../services/AxiosInstance";
import "../../App.css";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password !== "") {
      setFlag(false);
      var formData = new URLSearchParams();
      formData.append("Email", email);
      formData.append("Password", password);
      AxiosInstance.post("/login", formData)
        .then(async (res) => {
          if (res.data.data[0]) {
            localStorage.setItem(
              "email",
              JSON.stringify(res.data.data[0].Email)
            );
            localStorage.setItem("token", res.data.token);
            navigate("/table");
          }
        })
        .catch((err) => console.log(err, "err"));
    } else {
      setFlag(true);
    }
  };

  return (
    <div className="login-page">
      <form className="form-login">
        <div className="form-outline mb-4">
          <input
            type="email"
            name="Email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            name="Password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginBottom: "4px" }}
          onClick={handleSubmit}
        >
          Sign in
        </button>

        <p className="text-center text-muted mt-5 mb-0">
          Back to Register
          <a href="/register" className="fw-bold text-body">
            <u>Register</u>
          </a>
        </p>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Login;
