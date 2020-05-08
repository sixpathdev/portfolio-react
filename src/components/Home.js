import React from "react";
import Profile from "./Profile";
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5">
          <Profile />
        </div>
        <div className="col-12 col-md-6 offset-md-1 mt-5 mt-md-5">
          <div>
            <span className="h5 text-white">Hello there</span>
            <span
              className="d-block h5 text-white mt-2"
              style={{ "lineHeight": "25px" }}
            >
              I'm Miracle Gabriel, a Full-stack developer <br /> based in
              Nigeria
            </span>
            <Link to="/about" className="btn btn-default about_me_btn px-5 py-2 mt-3 text-white">
              About Me <i className="fas fa-arrow-right ml-1"></i>
            </Link>
            <div className="mt-5 mt-md-4 mb-5">
              <h3 className="text-white">Find me on:</h3>
              <a href="https://facebook.com/sixpathdev">
                <span className="text-white h3 mr-1 pl-1 pr-2">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </a>
              <a href="https://twitter.com/sixpathdev">
                <span className="text-white h3 mx-1 p-2">
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
              <a href="https://github.com/sixpathdev">
                <span className="text-white h3 mx-1 p-2">
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a href="https://linkedin.com/in/sixpathdev">
                <span className="text-white h3 mx-1 p-2">
                  <i className="fab fa-linkedin"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
