import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
    <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">Login</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter your username"/>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password"/>
              </div>
              <Link to="/" type="submit" class="btn btn-primary w-100">Login</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Login;
