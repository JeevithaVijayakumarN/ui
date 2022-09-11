import React from 'react'

import "../assets/images/css/login.css";

import{Link} from"react-router-dom";
import LoginComponent from '../components/LoginComponent';

const LoginPage = () => {
  return (
  //   <div className="Auth-form-container">
  //   <form className="Auth-form">
  //     <div className="Auth-form-content">
  //       <h3 className="Auth-form-title">Sign In</h3>
  //       <div className="form-group mt-3">
  //         <label>Email address</label>
  //         <input
  //           type="email"
  //           className="form-control mt-1"
  //           placeholder="Enter email" value={login.name}
            // onChange={(event) => {
            //   setLogin({ ...login, name: event.target.value });
            // }}
  //         />
  //       </div>
  //       <div className="form-group mt-3">
  //         <label>Password</label>
  //         <input
  //           type="password"
  //           className="form-control mt-1"
  // //           placeholder="Enter password"  value={login.password}
  //           onChange={(event) => {
  //             setLogin({ ...login, password: event.target.value });
  //           }}
  //         />
  //       </div>
  //       <div className="d-grid gap-2 mt-3">
  //        <Link to={"/userpage"}> <button type="submit" className="btn btn-primary  onClick={(event) => loginAPI(event)}">
  //           Submit
  //         </button></Link>
  // onClick={(event) => loginAPI(event)}
  //       </div>
  //       <p className="forgot-password text-right mt-2">
  //         Forgot <a href="#">password?</a>
  //       </p>
  //     </div>
  //   </form>
  // </div>
  <LoginComponent/>

  )
}

export default LoginPage