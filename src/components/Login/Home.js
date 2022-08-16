import React from "react";
import "../../App.css";
import img from "../../assets/home-img.jpg";

const Home = () => {
  return (
    <div className="container">
      <img src={img} style={{ width: "100%", height: "70%" }}></img>
      <div className="centered">
        <button
          className="btn btn-danger text-white"
          style={{
            padding: "20px 40px 20px 40px ",
            borderRadius: "25px",
            margin: "10px",
            fontSize: "15px",
            backgroundColor: "#cfbbab",
          }}
        >
          <a href="/login" style={{ color: "black" }}>
            Login
          </a>
        </button>
        <button
          className="btn btn-danger text-white"
          style={{
            padding: "20px 40px 20px 40px ",
            borderRadius: "25px",
            margin: "10px",
            fontSize: "15px",
            backgroundColor: "#cfbbab",
          }}
        >
          <a href="/register" style={{ color: "black" }}>
            Registarion
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
