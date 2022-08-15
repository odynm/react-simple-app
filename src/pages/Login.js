import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/AuthService";

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = () => {
    setErrorMessage("");
    if (authService.login(username, password)) {
      navigate("/", { replace: true });
    } else {
      setErrorMessage("Wrong password");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="col-4 offset-4">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="col-12">
          {errorMessage?.length > 0 && <div>{errorMessage}</div>}
        </div>
        <button className="btn btn-primary" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};
