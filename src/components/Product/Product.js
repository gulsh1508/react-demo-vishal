import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AXIOSImage from "../../services/AxiosImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const serverBaseURI = "http://localhost:5001";

  const [data, setData] = useState([]);

  const deleteProduct = (index) => {
    AXIOSImage.delete(`/deleteProductByID/${index}`).then((res) => {
      console.log(res);
      getData();
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    AXIOSImage.get("/getProductData").then((res) => {
      setData(res.data.data);
    });
  };

  return (
    <div className="container">
      <p className="text-center text-muted mt-5 mb-0">
        Want to add Product ?
        <a href="/AddProduct" className="fw-bold text-body">
          <u style={{ fontSize: "20px" }}>Add Product</u>
        </a>
      </p>
      <div className="table">
        <div className="table-header">
          <div className="header__item">Product ID</div>
          <div className="header__item">Product Label</div>
          <div className="header__item">Product Description</div>
          <div className="header__item">Product Image</div>
          <div className="header__item">Delete</div>
        </div>
        <div className="table-content">
          {data.map((res, index) => {
            return (
              <div className="table-row" key={index}>
                <div className="table-data">
                  <Link
                    to={`/EditProduct/${res._id}`}
                    className="btn btn-primary"
                  >
                    {index + 1}
                  </Link>
                </div>
                <div className="table-data">{res.ProductLabel}</div>
                <div className="table-data">{res.ProductDescription}</div>
                <div className="table-data">
                  {res.ProductImage ? (
                    <img
                      src={`${serverBaseURI}${res.ProductImage}`}
                      style={{
                        height: "60px",
                        width: "60px",
                        aspectRatio: "auto",
                      }}
                      alt="hello"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="table-data">
                  <a
                    className="btn btn-danger"
                    onClick={() => deleteProduct(res._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
