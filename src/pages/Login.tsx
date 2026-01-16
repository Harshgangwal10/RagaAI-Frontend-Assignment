import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { performLogin } from "../redux/slices/authSlice";
import type { ValidationError } from "../types";
import { validateLoginForm } from "../utils/validators";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "../styles/Login.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<ValidationError>({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading, error, isAuthenticated } = useAppSelector(state => state.auth);


  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
     setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateLoginForm(form.email, form.password);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    dispatch(performLogin( form.email,form.password ));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Healthcare Admin</h1>
          <p>Admin Dashboard Login</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isLoading}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              disabled={isLoading}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {error && <div className="error-banner">{error}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className="login-button"
            aria-busy={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="demo-credentials">
          <p>Demo Credentials:</p>
          <code>admin@healthcare.com / admin123</code>
        </div>
      </div>
    </div>
  );
};

export default Login;
