import React from "react";
import logo from "../assets/tmdb.svg";
import "./Footer.styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="dev">Developed by Nicolás Montiel</div>
      <div className="info">
        Information provided by{" "}
        <a href="https://www.themoviedb.org/">
          <img src={logo} alt="tmdb" style={{ height: "1em" }} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
