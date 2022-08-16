import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { Register } from "./components/Login/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Login/Home";
import Protected from "./services/Protected";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/V18/Table";
import UseID from "./components/V18/UseID";
import Batching from "./components/V18/Batching";
import Transition from "./components/V18/Transition";
import Product from "./components/Product/Product";
import AddProduct from "./components/Product/AddProduct";
import EditProduct from "./components/Product/EditProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/table" element={<Protected Component={Table} />} />
          <Route path="/useID" element={<Protected Component={UseID} />} />
          <Route
            path="/batching"
            element={<Protected Component={Batching} />}
          />
          <Route
            path="/transition"
            element={<Protected Component={Transition} />}
          />
          <Route
            path="/product"
            element={<Protected Component={Product} />}
          />
          <Route
            path="/addProduct"
            element={<Protected Component={AddProduct} />}
          />
          <Route
            path="/editProduct/:id"
            element={<Protected Component={EditProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
