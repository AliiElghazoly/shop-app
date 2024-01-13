import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <h1>Contact Us</h1>
      </header>

      <div className="container mt-4 py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non dolor vel eros elementum tincidunt.
            </p>
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <Link to="/shop-app" type="submit" className="btn btn-primary">
                Submit
              </Link>
            </form>
          </div>
          <div className="col-md-6">
            <h2>Contact Information</h2>
            <p>Email: alielghazoly769@gmail.com</p>
            <p>Phone: (+20) 150 7545815</p>
            <p>Address: Ashmon, Monofia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
