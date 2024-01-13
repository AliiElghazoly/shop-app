import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://raw.githubusercontent.com/AliiElghazoly/shop-app/main/public/EcommerceBackground.jpg"
          className="card-img"
          alt="background"
        />
        
        <div className="card-img-overlay"></div>
      </div>
     
      <Products />
    </div>
    
  );
}

export default Home;
