import React from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <ul className="nav justify-content-center pt-4 pb-5 mb-md-2">
      <li className="nav-item">
        <Link to="/" className="nav-link text-white">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link text-white">
          About me
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/works" className="nav-link text-white">
          Works
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link text-white">
          Let's talk
        </Link>
      </li>
    </ul>
  );
}
