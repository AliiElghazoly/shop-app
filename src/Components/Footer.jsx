import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-white mt-5">
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <h5>About Us</h5>
          <p>We are a team of passionate developers who created this platform to help people find</p>
        </div>
        <div className="col-md-4">
          <h5>Contact Us</h5>
          <p>Email: alielghazoly769@gmail.com</p>
          <p>Phone: (+20) 150 7545815</p>
        </div>
        <div className="col-md-4">
          <h5>Follow Us</h5>
          <ul className="list-unstyled">
            <li><Link href="#">Facebook</Link></li>
            <li><Link href="#">Twitter</Link></li>
            <li><Link href="#">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer