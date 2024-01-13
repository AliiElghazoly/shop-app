import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function NavBar() {
  const state = useSelector((state) => state.handleCart);
  const show = () => {
    const ul = document.getElementById("navbarSupportedContent");
    if (ul.classList.contains("show")) {
      ul.classList.remove("show");
    } else {
      ul.classList.add("show");
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="text-decoration-none fw-bold fs-4 logo" to="/shop-app">
            ShopX
          </Link>
          <button
            onClick={show}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/shop-app">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          <div className="buttons">
            <Link to="/login" className="btn btn-outline-dark">
              <i class="fa fa-sign-in" aria-hidden="true"></i>
            </Link>
            <Link to="/register" className="btn btn-outline-dark m-2">
              <i class="fa fa-user-plus"></i>
            </Link>
          </div>
          </div>
            <Link to="/cart" className="btn btn-outline-dark my-1">
              <i className="fa fa-shopping-cart me-1"></i>({state.length})
            </Link>
        </div>
      </nav>

    </>
  );
}

export default NavBar;
