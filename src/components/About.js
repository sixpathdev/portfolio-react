import React from "react";
import Profile from "./Profile";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5">
          <Profile />
        </div>
              <div id="about_me_text" className="col-12 col-md-5 offset-md-1 mt-5 mt-md-3 text-white">
                  <p>I'm a Full-stack web developer based in Nigeria.</p>
                  <p>I'm not yet a pro which I intend to become soon, but I'm capable of learning and working with new technologies swiftly.</p>
                  <p>At the moment, I'm a back-end developer at Babbage Intelligence, Community Contributor at DSC Uniport.</p>
                  <p>Most of my time is spent on learning new technologies in the web to build awesome stuffs. I mentor beginners remotely and also help other devs if the need arises.</p>
                  <p>Outside being a techy, I hangout with few friends and try not to be an introvert in reality while being social on social media, <span role="img" aria-label="Smile">😊</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
