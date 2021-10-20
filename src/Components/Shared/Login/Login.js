import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {googleLogIn, handleResetPassword, handleNameChange ,handleEmailChange,handlePasswordChange, isLogin, handleRegistration, toggleLogin, error} = useAuth();
    
    return (
      // Login page
        <div className="login-bg p-5">
          <div className="container my-5 ">
              <div className="row align-items-center " style={{ height: "100vh" }}>
                <div className="col-md-6 bg-light shadow p-5">
                  <form onSubmit={handleRegistration}>
                    <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                    {!isLogin && <div className="row mb-3">
                      <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                      <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                      </div>
                    </div>}
                    <div className="row mb-3">
                      <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                      <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                          <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                          <label className="form-check-label" htmlFor="gridCheck1">
                            Already Registered?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-primary ">
                      {isLogin ? 'Login' : 'Register'}
                    </button>
                    <button type="button" onClick={handleResetPassword} className="btn btn-danger mx-2">Reset Password</button>
                  </form>
                      <div className="from-group mt-5">
                          <button onClick={googleLogIn} className="btn btn-warning" >
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Google Sign in 
                          </button>
                      </div>
                  </div>
                  <div className="col-md-6 d-none d-md-block h-50 bg-danger">
                    <div className="text-wrap p-4 p-lg-5 text-center">
                      <div className="text-light w-100 align-middle">
                        <h2 className="fs-1 ">Welcome to login</h2>
                        <p>Don't have an account?</p>
                        <p>Please Uncheck the Input Field And Register</p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </div>
        
    );
};

export default Login;