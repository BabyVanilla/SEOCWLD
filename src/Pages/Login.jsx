import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Signup from "./Signup";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Login() {
  const history = useHistory();

  function handleClick() {
    history.push("/Signup");
  }
  function homecall() {
    history.push("/Home");
  }
  return (
    <div>
      <div className="form-data">
        <form>
          <h1 className="login-text">Login</h1>
          <label for="uname">
            <b>Username </b>
          </label>
          <input type="text" placeholder="Enter Username" name="uname" />
          <br />
          <label for="uname">
            <b>Password </b>
          </label>
          <input type="password" placeholder="Enter Password" name="upass" />
          <br />
          <button type="submit" onClick={homecall}>
            Login
          </button>{" "}
          <br />
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
          <h4>
            <span className="SignupScreen_link" onClick={handleClick}>
              Sign Up
            </span>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Login;
