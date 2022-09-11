import React from "react";

import "../assets/images/css/register.css";

import { Link } from "react-router-dom";
import RegisterComponent from "../components/RegisterComponent";
const RegisterPage = () => {
  return (
  //   <div>
  //     <div className="form">
  //       <div className="form-body">
  //         <div className="username">
  //           <label className="form__label">userName </label>
  //           <input className="form__input" type="text" placeholder="userName" value={register.name}
  //             onChange={(event) => {
  //               setRegister({ ...register, name: event.target.value });
  //             }}/>
  //         </div>
  //         {/* <div className="lastname">
  //                 <label className="form__label" for="lastName">Last Name </label>
  //                 <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
  //             </div> */}
  //         <div className="email">
  //           <label className="form__label" for="email">
  //             Email{" "}
  //           </label>
  //           <input
  //             type="email"
  //             id="email"
  //             className="form__input"
  //             placeholder="Email" value={register.email}
  //             onChange={(event) => {
  //               setRegister({ ...register, email: event.target.value });
  //             }}
  //           />
  //         </div>
  //         <div className="phone">
  //           <label className="form__label">phone </label>
  //           <input
  //             className="form__input"
  //             type="number"
  //             id="firstName"
  //             placeholder="phone"  value={register.phone}
  //             onChange={(event) => {
  //               setRegister({ ...register, phone: event.target.value });
  //             }}
  //           />
  //         </div>

  //         <div className="password">
  //           <label className="form__label" for="password">
  //             Password{" "}
  //           </label>
  //           <input
  //             className="form__input"
  //             type="password"
  //             id="password"
  //             placeholder="Password   value={register.password}
  //             onChange={(event) => {
  //               setRegister({ ...register, password: event.target.value });
  //             }}"
  //   //         />
  //         </div>
  //         {/* <div className="confirm-password">
  //                 <label className="form__label" for="confirmPassword">Confirm Password </label>
  //                 <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
  //             </div> */}
  //       </div>
  //       <div class="footer">
  //           <button type="submit" class="btn"   onClick={(event) => registerAPI(event)}>
  //             Register
  //           </button>
  //   <p className="text-start mt-3">
  //   Registered? <Link to="/">Login</Link>
  // </p>
            
          
  //       </div>
  //     </div>
  //   </div>
    <RegisterComponent/>
  );
};

export default RegisterPage;
