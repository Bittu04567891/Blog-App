import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton" type="submit">
          register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/Blog-App/login">Login</Link>
      </button>
    </div>
  );
};

export default Register;