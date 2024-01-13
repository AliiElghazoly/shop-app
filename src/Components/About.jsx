import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function About() {
  return (
    <>
      <header className="bg-dark text-white text-center py-5">
        <h1>About Us</h1>
      </header>
      <Carousel
        className="py-5 container d-flex justify-content-center align-items-center flex-column"
        width="600px"
      >
        <div>
          <img src="https://raw.githubusercontent.com/AliiElghazoly/shop-app/main/public/shop.jpg" alt="..." />
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/AliiElghazoly/shop-app/main/public/istockphoto-1447845897-1024x1024.jpg" alt="..." />
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/AliiElghazoly/shop-app/main/public/istockphoto-1429456277-1024x1024.jpg" alt="..." />
        </div>
      </Carousel>

      <div className="container mt-4 py-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non dolor vel eros elementum tincidunt.
            </p>
          </div>
          <div className="col-md-6">
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non dolor vel eros elementum tincidunt.
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h2>Contact Us</h2>
        <p>Email: alielghazoly769@gmail.com</p>
        <p>Phone: (+20) 150 7545815</p>
      </div>
    </>
  );
}

export default About;
