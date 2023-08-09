import React, { useState } from 'react';
import './signIn.css';
import { Navigate } from 'react-router-dom';
import API from '../../API/api';
import { Link } from 'react-router-dom';

function SignIn({ setIdUser }) {
  const [email, setEmail] = useState('');
  const [signup, setSignup] = useState(false);

  const [password, setPassword] = useState('');

  const [errorEmail, setErrorEmail] = useState(false);
  const [emailRegex, setEmailRegex] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [redirect, setRedirect] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSignup = () => {
    setSignup(true);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const user = { email: email, password: password };
    if (!email) {
      setErrorEmail(true);
      return;
    } else {
      if (!password) {
        setErrorEmail(false);
        setErrorPassword(true);
        return;
      } else {
        setErrorPassword(false);
        if (!validateEmail(email)) {
          setEmailRegex(true);
          return;
        } else {
          setEmailRegex(false);
          const fetchData = async () => {
            const response = await API.postSignIn(user);
            if (response.data.errorEmail) {
              setErrorPassword(false);
              setErrorEmail(true);
              return;
            } else if (response.data.errorPassword) {
              setErrorEmail(false);
              setErrorPassword(true);
              return;
            } else {
              setIdUser(response.data.user._id);
              localStorage.setItem(
                'idUser',
                JSON.stringify(response.data.user._id)
              );
              setRedirect(true);
            }
          };

          fetchData();
        }
      }
    }
  };

  const onSignupSubmit = () => {
    const user = { email: email, password: password };
    if (!email) {
      setErrorEmail(true);
      return;
    } else {
      if (!password) {
        setErrorEmail(false);
        setErrorPassword(true);
        return;
      } else {
        setErrorPassword(false);
        if (!validateEmail(email)) {
          setEmailRegex(true);
          return;
        } else {
          setEmailRegex(false);
          const fetchData = async () => {
            const response = await API.postSignup(user);
            if (response.data.error) {
              alert(response.data.mess);
            } else {
              alert('Đăng ký tài khoản thành công');
              setSignup(false);
            }
          };

          fetchData();
        }
      }
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          {signup ? (
            <span className="login100-form-title p-b-33">
              Đăng ký tài khoản
            </span>
          ) : (
            <span className="login100-form-title p-b-33">Đăng nhập</span>
          )}

          <div className="d-flex justify-content-center pb-5">
            {emailRegex && (
              <span className="text-danger">* Incorrect Email Format</span>
            )}
            {errorEmail && (
              <span className="text-danger">* Please Check Your Email</span>
            )}
            {errorPassword && (
              <span className="text-danger">* Please Check Your Password</span>
            )}
          </div>

          <div className="wrap-input100 validate-input">
            <input
              className="input100"
              type="text"
              placeholder="Email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>

          <div className="wrap-input100 rs1 validate-input">
            <input
              className="input100"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>

          {signup ? (
            <div className="container-login100-form-btn m-t-20">
              <button className="login100-form-btn" onClick={onSignupSubmit}>
                Đăng ký
              </button>
            </div>
          ) : (
            <div className="container-login100-form-btn m-t-20">
              {redirect && <Navigate to={`/`} />}
              <button className="login100-form-btn" onClick={onSubmit}>
                Đăng nhập
              </button>
            </div>
          )}

          {signup ? (
            <div className="text-center p-t-45 p-b-4">
              <Link
                className="txt2 hov1"
                onClick={() => {
                  setSignup(false);
                }}
              >
                Quay lại
              </Link>
            </div>
          ) : (
            <div className="text-center p-t-45 p-b-4">
              <span className="txt1">Create an account?</span>
              &nbsp;
              <Link className="txt2 hov1" onClick={onSignup}>
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
