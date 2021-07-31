import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles/_bootswatch.scss";
import "./styles/bootstrap.min.css";
import "./styles/_variables.scss";
import popcorn from "./images/popcorn.png";

ReactDOM.render(
  <Router>
    <div className="position-relative">
      <img
        className="position-fixed"
        src={popcorn}
        alt={popcorn}
        style={{ top: 450, right: 20, zIndex: "-10" }}
      />

      <App />
    </div>
  </Router>,
  document.getElementById("root")
);
