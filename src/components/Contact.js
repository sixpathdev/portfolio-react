import React, { useState } from "react";
import emailjs from "emailjs-com";

import { keys } from "../api_keys";

const Contact = () => {
  const [input, setInput] = useState({});

  const handleForm = (e) => {
    e.persist();
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("gmail", keys.template_id, e.target, keys.user_id).then(
        (result) => {
            document.getElementById("contact_form").reset();
            document.querySelector(".display_alert").style.display = "block";
            setTimeout(() => {
                document.querySelector(".display_alert").style.display = "none";
            }, 2500)
      },
      (error) => {
        alert("An error occured, Please try again", error.text);
      }
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-5 offset-md-1">
          <div className="col-12 h3 text-white">I live online</div>
          <div className="col-12">
            <p className="mt-5 text-white">
              I'm usually somewhere on the internet. You can find me oversharing
              on <a href="https://twitter.com/sixpathdev">twitter</a>, exploring{" "}
              <a href="https://facebook.com/sixpathdev">facebook</a> contents,
              posting exciting projects on{" "}
              <a href="https://github.com/sixpathdev">github</a>, or
              occasionally looking for new stuffs to learn.
            </p>
            <p className="mt-5 text-white">
              Have a project you would like me to work on, please fill and
              submit the form below. You should get a response from me within 3
              hours.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row">
            <div className="col-12 col-md-9 mt-4 offset-md-1">
              <div className="h4 text-white text-center mb-4 d-md-none">Send me an email</div>
              <div
                className="alert alert-success display_alert"
                style={{ display: "none" }}
                role="alert"
              >
                <small>Email sent. I'll get back to you shortly.</small>
              </div>
              <form id="contact_form" method="POST" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="full_name"
                    onChange={handleForm}
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group mt-5">
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    onChange={handleForm}
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group mt-5">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group mt-5">
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    onChange={handleForm}
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-default btn_send w-100 mt-2 text-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
