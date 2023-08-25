import React from "react";
// import loginBg from "../../assets/images/loginBg.png";
// import "./style.css";
// import logo from "../../assets/images/logoBeyondBank.png";

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
        // style={{ backgroundImage: `url(${loginBg})` }}
      ></section>

      <div className="content-container login-content-container">
        {/* <img className="page-logo" src={logo} alt="logo" /> */}

        <LoginForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    // <div className="login-form">
    <form className="login-form">
      <h3 className="form-title">SIGN IN</h3>
      <input type="text" name="username" id="username" placeholder="Username" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <div>
        <input type="checkbox" name="saveUser" id="saveUser" />
        <label htmlFor="saveUser">Save Username</label>
      </div>
      <input type="submit" value="Login" />
    </form>
    // {/* </div> */}
  );
};

export default Login;


// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login