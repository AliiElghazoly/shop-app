import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
      <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Sign Up</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="fullName" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="fullName" placeholder="Enter your full name"/>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
              </div>
              <Link to="/" type="submit" class="btn btn-primary w-100">Sign Up</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Register