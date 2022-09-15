import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import groceryApi from "../api/grocery";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [login, setLogin] = useState({ name: "", password: "" });

  const loginAPI = (event) => {
    event.preventDefault();

    console.log("dadaad");
    console.log("dadaad");
    console.log("dadaad");
    console.log("dadaad");
    console.log("dadaad");
    console.log("dadaad");

    groceryApi
      .post(`/auth/login`, {
        userName: login.name,
        password: login.password,
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data);
        console.log(res.data);
        console.log(res.data);
        console.log(res.data);
        if (res.data) {
          let loggedInUser = res.data;
          loggedInUser.isLoggedIn = true;
          loggedInUser.role = res.data;
          setLoggedInUser(loggedInUser);
          console.log(res.data);
          console.log(res.data);
          console.log(res.data);
          console.log(res.data);
          if (res.data.data.userName === "admin") {
            navigate("/admin");
          } else navigate("/userpage");
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1>Login</h1>

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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
