import React from "react";
import "./Home.css";
import bike from "../../images/bike.png";
import car from "../../images/car.png";
import bus from "../../images/bus.png";
import train from "../../images/train.png";
import plane from "../../images/plane.jpg";
import backgroundPicture from "../../images/background.png";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h1>Travel Agent Bangladesh </h1>
        <Link to="/destination">
          <img className="image" src={bike} alt=""></img>
        </Link>
        <Link to="/destination">
          <img className="image" src={car} alt=""></img>
        </Link>
        <Link to="/destination">
          <img className="image" src={bus} alt=""></img>
        </Link>
        <Link to="/destination">
          <img className="image" src={train} alt=""></img>
        </Link>
        <Link to="/destination">
          <img className="image" src={plane} alt=""></img>
        </Link>
      </div>
      <div>
        <img src={backgroundPicture} alt=""></img>
      </div>
    </div>
  );
};

export default Home;
