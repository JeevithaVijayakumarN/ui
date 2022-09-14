import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import groceryApi from "../api/grocery";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const registerAPI = (event) => {
    event.preventDefault();

    groceryApi
      .post(`/auth/register`, {
        userName: register.name,
        email: register.email,
        phone: register.phone,
        password: register.password,
      })
      .then((res) => {
        if (res.data.data) {
          navigate("/userpage");
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };

  return (
    <div>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2>Welcome to Grocery Shopping </h2>

              <form>
                <h3>Please register your details </h3>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    value={register.name}
                    onChange={(event) => {
                      setRegister({ ...register, name: event.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={register.email}
                    onChange={(event) => {
                      setRegister({ ...register, email: event.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    value={register.phone}
                    onChange={(event) => {
                      setRegister({ ...register, phone: event.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={register.password}
                    onChange={(event) => {
                      setRegister({
                        ...register,
                        password: event.target.value,
                      });
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={(event) => registerAPI(event)}
                >
                  Register
                </button>
                <p className="text-start mt-3">
                  Registered? <Link to="/">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
