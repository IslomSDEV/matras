import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../Context/Context";
import "./Login.css";

export default function Login() {
  const [loginValue, setLoginValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const { setLogin, login } = useContext(Context);
  console.log(login);

  const LOGIN_URL = "http://206.189.128.106:3214/v1/users/login";

  function enterAdmin(res) {
    if (res) {
      setLogin(true);
      localStorage.setItem("token", JSON.stringify({useToken: res.data.data.token, userlogin: login}));
    } else {
      setLogin(false);
    }
  }


  function loginFunc(e) {
    e.preventDefault();
    try {
      let enterObj = {
        user_login: loginValue,
        user_password: passValue,
      };

      axios
        .post(LOGIN_URL, enterObj, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => enterAdmin(res));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="loginSy">
        <div className="loginDiv">
          <h3 className="loginTitle">Login</h3>
          <form onSubmit={(e) => loginFunc(e)}>
            <label className="loginLabel">
              Login
              <input
                className="loginInput"
                type="text"
                required
                placeholder="Enter Login..."
                onChange={(e) => setLoginValue(e.target.value)}
              />
            </label>
            <label className="loginLabel">
              Password
              <input
                className="loginInput"
                type="password"
                required
                placeholder="Enter Pasword..."
                onChange={(e) => setPassValue(e.target.value)}
              />
            </label>
            <button className="loginBtn" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
