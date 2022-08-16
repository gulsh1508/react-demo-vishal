import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import AXIOSImage from "../../services/AxiosImage";

const AddProduct = () => {
  let navigate = useNavigate();
  const [ProductLabel, setProductLabel] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [file, setFile] = useState(null);
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ProductLabel && ProductDescription !== "") {
      setFlag(false);
      var formData = new FormData();
      formData.append("ProductLabel", ProductLabel);
      formData.append("ProductDescription", ProductDescription);
      formData.append("file1", file);
      AXIOSImage.post("/uploadProduct", formData)
        .then(async (res) => {
          if (res.data.data[0]) {
            navigate("/product");
          }
        })
        .catch((err) => console.log(err, "err"));
    } else {
      setFlag(true);
    }
  };

  return (
    <div className="uploadProduct-page">
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            name="ProductLabel"
            className="form-control"
            value={ProductLabel}
            onChange={(e) => setProductLabel(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Product Label
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            name="ProductDescription"
            className="form-control"
            value={ProductDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Product Description
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="file"
            className="form-control form-control-lg"
            name="file1"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="form-label" htmlFor="form3Example5cg">
            Product Image
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={handleSubmit}
        >
          Add Product
        </button>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </form>
    </div>
  );
};

export default AddProduct;
