import React from "react";
import "./Registration.css";
import Wrapper from "../Wrapper/Wrapper.js";

const Registration = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
      name,
      email,
      password,
    };
    console.log(`Name: ${name}, Password: ${password}, Email: ${email}`);
    try {
      const responce = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (responce.ok) {
        const responceData = await responce.json();
        console.log("Server responce:", responceData);
      } else {
        console.error("Server returned an error:", responce.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Wrapper>
      <section class="vh-100 bg-image">
        <div class="mask d-flex align-items-center h-100 gradient-custom-3">
          <div class="container h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                <div class="card" style={{ borderRadius: "15px" }}>
                  <div class="card-body p-5">
                    <h2 class="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="form3Example1cg"
                          class="form-control form-control-lg"
                          name="name"
                        />
                        <label class="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          class="form-control form-control-lg"
                          name="email"
                        />
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          class="form-control form-control-lg"
                          name="password"
                        />
                        <label class="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>

                      <div class="form-check d-flex justify-content-center mb-5">
                        <input
                          class="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3cg"
                        />
                        <label class="form-check-label" for="form2Example3g">
                          I agree all statements in{" "}
                          <a href="#!" class="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>

                      <div class="d-flex justify-content-center">
                        <button
                          type="submit"
                          // type="button"
                          class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>

                      <p class="text-center text-muted mt-5 mb-0">
                        Have already an account?{" "}
                        <a href="#!" class="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default Registration;
