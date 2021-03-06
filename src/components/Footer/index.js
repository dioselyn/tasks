import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <p className="Footer color-primary">
        Made by{" "}
        <a
          className="color-gradient"
          href="https://portfolio.developdctech.com"
          target="_blank"
          rel="noreferrer"
        >
          Dioselyn Colina
        </a>
      </p>
    </footer>
  );
}

export { Footer };
