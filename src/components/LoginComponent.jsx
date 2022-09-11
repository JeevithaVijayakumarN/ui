import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import groceryApi from "../api/grocery";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);
  const [login, setLogin] = useState({ name: "", password: "" });

  const loginAPI = (event) => {
    event.preventDefault();

    groceryApi
      .post(`/auth/login`, {
        userName: login.name,
        password: login.password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.data) {
          let loggedInUser = res.data.data;
          loggedInUser.isLoggedIn = true;
          setLoggedInUser(loggedInUser);
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
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="User Name"
            value={login.name}
            onChange={(event) => {
              setLogin({ ...login, name: event.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={login.password}
            onChange={(event) => {
              setLogin({ ...login, password: event.target.value });
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => loginAPI(event)}
        >
          Login
        </button>
        {/* onClick={(event) => loginAPI(event)} */}
      </form>
    </div>
  );
};

export default LoginComponent;
