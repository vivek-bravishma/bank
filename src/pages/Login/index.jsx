import React, { useContext, useEffect, useState } from "react";
import loginBg from "../../assets/images/loginBg.png";
import "./style.css";
import logo from "../../assets/images/logoBeyondBank.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import config from "../../utils/config";
// import { useAuth } from "../../hooks/useAuth";

// import users from "../../utils/users.json";

const Login = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    axios
      .get(config.userDetailsUrl)
      .then((response) => {
        setUsers(response.data);
        console.log("fetched users=> ", users);
      })
      .catch((error) => {
        console.log("user fetching error", error);
      });
  }, []);

  return (
    <div className="main-container login-container">
      <section
        className="bg-container login-bg-container"
        style={{ backgroundImage: `url(${loginBg})` }}
      ></section>

      <div className="content-container login-content-container">
        <img className="page-logo" src={logo} alt="logo" />

        <LoginForm users={users} />
      </div>
    </div>
  );
};

const LoginForm = ({ users }) => {
  const navigate = useNavigate();
  // const { login } = useAuth();
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("alex@gmail.com");
  const [pass, setPass] = useState("1234");
  const [formErr, setFormErr] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      const user = users.filter(
        (user) => user.email === email && user.password === pass
      );
      if (!user.length) {
        setFormErr(true);
        return console.log("Invalid user credentials");
      }

      login(user[0]);
      setFormErr(false);
      navigate("/");
    } catch (error) {
      console.log("error loging in -> ", error);
    }
  };

  const inputHandler = (e, setter) => {
    setter(e.target.value);
  };

  return (
    // <div className="login-form">
    <form className="login-form" onSubmit={handleLogin}>
      <h3 className="form-title">SIGN IN</h3>
      <input
        className={formErr ? "err-inp" : ""}
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        onChange={(e) => inputHandler(e, setEmail)}
        value={email}
        required
      />
      <input
        className={formErr ? "err-inp" : ""}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={pass}
        onChange={(e) => inputHandler(e, setPass)}
        required
      />
      <div>
        {/* <div className="frm-save">
          <input type="checkbox" name="saveUser" id="saveUser" />
          <label htmlFor="saveUser">Save Username</label>
        </div> */}
        {formErr && <span className="login-error">Invalid Credentials!</span>}
        <input type="submit" value="Login" />
      </div>
    </form>
    // {/* </div> */}
  );
};

export default Login;
