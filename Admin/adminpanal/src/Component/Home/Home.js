import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Link } from "react-router-dom";
import "./Home.css";
const accessToken = window.localStorage.getItem("access-token");

const Home = () => {
  return (
    <Wrapper>
      {accessToken ? (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-4">
              <Link
                to="/news"
                className="btn btn-primary divbutton text-center"
              >
                News
              </Link>
            </div>
            <div className="p-4">
              <Link to="/sportsnews" className="btn btn-primary divbutton">
                Sports News
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>Please Login or Register Yourself</h1>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
