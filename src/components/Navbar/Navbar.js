import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark ">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <a className="nav-link text-white display-6" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white display-6" href="/table">
              Table
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white display-6" href="/useID">
              Use ID
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white display-6" href="/batching">
              Automatic Batching
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white display-6" href="/transition">
              Transition
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white display-6" href="/product">
              Product
            </a>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-white display-6 "
              style={{
                padding: "10px 30px 10px 30px ",
                borderRadius: "25px",
                backgroundColor: " orangered",
              }}
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
