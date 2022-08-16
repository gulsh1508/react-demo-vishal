import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

const container = document.getElementById("root");
const root = ReactDOM.hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
root.render(<App />);
