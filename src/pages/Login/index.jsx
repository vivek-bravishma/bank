import React, { useContext, useState } from "react";
import loginBg from "../../assets/images/loginBg.png";
import "./style.css";
import logo from "../../assets/images/logoBeyondBank.png";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
// import { useAuth } from "../../hooks/useAuth";

import users from "../../utils/users.json";

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div
//         className="login-bg-container"
//         style={{ backgroundImage: `url(${loginBg})` }}
//       >
//         <img className="page-logo" src={logo} alt="logo" />
//       </div>
//       <LoginForm />
//     </div>
//   );
// };

const Login = () => {
  return (
    <div className="main-container login-container">
      <section
        className="bg-container login-bg-container"
        style={{ backgroundImage: `url(${loginBg})` }}
      ></section>

      <div className="content-container login-content-container">
        <img className="page-logo" src={logo} alt="logo" />

        <LoginForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  // const { login } = useAuth();
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
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
        <div className="frm-save">
          <input type="checkbox" name="saveUser" id="saveUser" />
          <label htmlFor="saveUser">Save Username</label>
        </div>
        {formErr && <span className="login-error">Invalid Credentials!</span>}
      </div>
      <input type="submit" value="Login" />
    </form>
    // {/* </div> */}
  );
};

export default Login;
