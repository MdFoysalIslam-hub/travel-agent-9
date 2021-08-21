import { Button } from "@material-ui/core";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="home">Home</a>
        <a href="destination">Destination</a>
        <a href="blog">Blog</a>
        <a href="contact">Contact</a>
        <a href="login">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
