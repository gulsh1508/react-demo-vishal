// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { Alert } from "react-bootstrap";
// import AXIOSImage from "../../services/AxiosImage";

// export default function Edit(props) {
//   let navigate = useNavigate();
//   const { id } = useParams();
//   const [data, setData] = useState([]);
//   const [ProductLabel, setProductLabel] = useState("");
//   const [ProductDescription, setProductDescription] = useState("");
//   const [file, setFile] = useState("");
//   const [flag, setFlag] = useState(false);

//   useEffect(() => {
//     AXIOSImage.get(`/getProductByID/${id}`).then((res) => {
//       let value = res.data.data;
//       setData(value);
//     });
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (ProductLabel && ProductDescription !== "") {
//       var formData = new FormData();
//       formData.append("ProductLabel", ProductLabel);
//       formData.append("ProductDescription", ProductDescription);
//       formData.append("file1", file);
//       AXIOSImage.post(`/EditProduct/${id}`, formData)
//         .then((res) => {
//           if (res.data.status == 1) {
//             console.log(res.data, "res.data");
//             navigate("/product");
//           }
//         })
//         .catch((err) => console.log(err, "err"));
//     } else {
//       setFlag(true);
//     }
//   };

//   return (
//     <div className="EditProduct-page">
//       <form>
//         <div className="form-outline mb-4">
//           <input
//             type="text"
//             name="ProductLabel"
//             className="form-control"
//             defaultValue={ProductLabel ? ProductLabel : data.ProductLabel}
//             onChange={(e) => setProductLabel(e.target.value)}
//           />
//           <label className="form-label" htmlFor="form2Example1">
//             Product Label
//           </label>
//         </div>

//         <div className="form-outline mb-4">
//           <input
//             type="text"
//             name="ProductDescription"
//             className="form-control"
//             defaultValue={
//               ProductDescription ? ProductDescription : data.ProductDescription
//             }
//             onChange={(e) => setProductDescription(e.target.value)}
//           />
//           <label className="form-label" htmlFor="form2Example1">
//             Product Description
//           </label>
//         </div>

//         <div className="form-outline mb-4">
//           <input
//             type="file"
//             name="file1"
//             className="form-control"
//             defaultValue={file ? file : data.file}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="btn btn-primary btn-block mb-4"
//           type="submit"
//         >
//           Update Product
//         </button>

//         {flag && (
//           <Alert color="primary" variant="warning">
//             Fill correct Info else keep trying.
//           </Alert>
//         )}
//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import AXIOSImage from "../../services/AxiosImage";

export default function Edit(props) {
  const serverBaseURI = "http://localhost:5001";

  let navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [ProductLabel, setProductLabel] = useState("");
  const [ProductDescription, setProductDescription] = useState("");
  const [file, setFile] = useState(null);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    AXIOSImage.get(`/getProductByID/${id}`).then((res) => {
      let value = res.data.data.map((items) => {
        setProductLabel(items.ProductLabel);
        setProductDescription(items.ProductLabel);
        setFile(items.ProductImage);
        setData(items);
      });
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ProductLabel && ProductDescription !== "") {
      var formData = new FormData();
      formData.append("ProductLabel", ProductLabel);
      formData.append("ProductDescription", ProductDescription);
      formData.append("file1", file);
      AXIOSImage.post(`/EditProduct/${id}`, formData)
        .then((res) => {
          if (res.data.status == 1) {
            console.log(res.data, "res.data");
            navigate("/product");
          }
        })
        .catch((err) => console.log(err, "err"));
    } else {
      setFlag(true);
    }
  };

  return (
    <div className="EditProduct-page">
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
          <label className="form-label" htmlFor="form2Example1">
            Product Description
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="file"
            name="file1"
            className="form-control"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
        </div>

        {data.ProductImage ? (
          <img
            src={`${serverBaseURI}${data.ProductImage}`}
            style={{ height: "60px", width: "60px", aspectRatio: "auto" }}
            alt="hello"
          />
        ) : (
          ""
        )}

        <br />
        <br />

        <button
          onClick={handleSubmit}
          className="btn btn-success mb-4"
          type="submit"
        >
          Update Product
        </button>

        <a
          onClick={handleSubmit}
          className="btn btn-danger mb-4 "
          type="submit"
          href="/product"
        >
          cancel
        </a>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </form>
    </div>
  );
}
