import React from "react";
import Wrapper from "../Wrapper/Wrapper.js";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const loginhandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data } = await axios.post("http://127.0.0.1:4000/user/login", {
        email,
        password,
      });

      window.localStorage.setItem("access-token", data.data.accessToken);

      const accessToken = window.localStorage.getItem("access-token");
      // if (accessToken) <Redirect to="/" />;
      if (accessToken) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Wrapper>
      <section className="vh-100" style={{ backgroundColor: "#84fab0" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <form onSubmit={loginhandler}>
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-5">Sign in</h3>
                    <div className="form-outline mb-4">
                      <input
                        name="email"
                        type="email"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        name="password"
                        type="password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      <Link to="/"></Link>
                      Login
                    </button>
                    <hr className="my-4" />
                    <button
                      className="btn btn-lg btn-block btn-primary"
                      style={{ backgroundColor: "#dd4b39" }}
                      type="submit"
                    >
                      <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                    <button
                      className="btn btn-lg btn-block btn-primary mb-2"
                      style={{ backgroundColor: "#3b5998" }}
                      type="submit"
                    >
                      <i className="fab fa-facebook-f me-2"></i> Sign in with
                      Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Login;
