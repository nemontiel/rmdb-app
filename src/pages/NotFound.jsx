import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.styles.css";

const NotFound = () => (
  <div className="not__found">
    <h1>404 - Not Found!...Nothing to see here</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
