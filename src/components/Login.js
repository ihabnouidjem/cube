import React, { useContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../App";

function Login() {
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(true);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { auth, loginUser, signInUser, logOutUser, addUserDocument } =
    useContext(authContext);
  useEffect(() => {
    if (auth.currentUser) {
      navigate("../Cart");
    }
  }, [auth.currentUser]);
  const usernameChanged = (event) => {
    setUsername(event.target.value);
  };
  const emailChanged = (event) => {
    setEmail(event.target.value);
  };
  const passwordChanged = (event) => {
    setPassword(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    if (loginStatus) {
      loginUser({ email, password });
      navigate("../Cart");
    } else {
      signInUser({ email, password, username });
      navigate("../Cart");
    }
  };
  const changeLoginStatus = () => {
    setLoginStatus(!loginStatus);
  };
  const logOut = () => {
    logOutUser();
  };
  const cartPage = () => {
    navigate("../Cart");
  };

  return (
    <div className="login">
      {!auth.currentUser ? (
        <form className="login-form">
          <h1 className="login-form-header">
            {loginStatus ? "Login" : "Sign up"}
          </h1>
          {!loginStatus && (
            <input
              onChange={usernameChanged}
              placeholder="username"
              type="text"
            />
          )}
          <input onChange={emailChanged} placeholder="e-mail" type="text" />
          <input
            onChange={passwordChanged}
            placeholder="password"
            type="password"
          />
          <button className="login-form-submit" onClick={submitForm}>
            submit
          </button>
          <p className="login-form-btn" onClick={changeLoginStatus}>
            {loginStatus ? "create account" : "already have an account? Login"}
          </p>
          {/* <p className="login-form-btn" onClick={logOut}>
            logOut
          </p> */}
        </form>
      ) : (
        <div className="login-logged">
          <p>already Logged in</p>
          <button onClick={cartPage}>profile</button>
          <button onClick={logOut}>log out</button>
        </div>
      )}
    </div>
  );
}

export default Login;
