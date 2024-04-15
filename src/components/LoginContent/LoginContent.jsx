import { useState } from "react";
import "./login.css";
import { FlashAuto } from "@mui/icons-material";

const LoginContent = () => {
  const [registerActive, setRegisterActive] = useState(false);
  const [loginActive, setLoginActive] = useState(true);

  const openRegister = () => {
    setRegisterActive(true);
    setLoginActive(false);
  };

  const openLogin = () => {
    setRegisterActive(false);
    setLoginActive(true);
  };

  return (
    <div className="main-login">
      <div className="login_container">
        <div className="form">
          {loginActive && (
            <form action="#">
              <h2>Login</h2>
              <div className="input-box">
                <input type="text" required />
                <label>Username</label>
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="password" required />
                <label>Password</label>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="forget-section">
                <p>
                  <input type="checkbox" name="" id="" />
                  Remember me
                </p>
                <a href="#">Forgot Password ?</a>
              </div>
              <button className="btn_poojya">Sign in</button>
              <div className="register">
                <span>
                  Don't have an account ?{" "}
                  <a href="#" className="RegisterLink" onClick={openRegister}>
                    Register
                  </a>
                </span>
              </div>
            </form>
          )}

          {registerActive && (
            <form action="#">
              <h2>Register</h2>
              <div className="input-box">
                <input type="text" required />
                <label>Username</label>
                <i className="bx bxs-user"></i>
              </div>
              <div className="input-box">
                <input type="email" required />
                <label>Email Address</label>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <div className="input-box">
                <input type="password" required />
                <label> Password</label>
                <i className="bx bxs-lock-alt"></i>
              </div>
              <button className="btn_poojya">Sign up</button>
              <div className="login">
                <span>
                  Already have an account ?{" "}
                  <a href="#" className="LoginLink" onClick={openLogin}>
                    Login
                  </a>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
