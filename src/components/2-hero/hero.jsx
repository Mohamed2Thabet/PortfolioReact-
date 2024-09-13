import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
      <div className="left">
        <div className="image">
          <img src="./me.png" alt="" />
          <span className="icon-verified"></span>
        </div>
        <div className="text-info">
          <h1>React Developer and Tech Enthusiast</h1>
          <p>
            I'm Mohamed Thabet, a fresh React Developer with a passion for
            building dynamic and responsive web applications. With a focus on
            front-end development, I craft interactive user interfaces and
            optimize performance to deliver seamless user experiences.
            Leveraging the latest technologies in JavaScript and React, I'm
            constantly learning and adapting to create innovative solutions in
            the tech world.
          </p>
        </div>
        <ul className="links">
          <li><a href="" className="icon-instagram"></a></li>
          <li><a href="" className="icon-github"></a></li>
          <li><a href="" className="icon-linkedin-square"></a></li>
          <li><a href="" className="icon-twitter"></a></li>
        </ul>
      </div>
      <div className="right">
        <img src="./landing-image.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default Hero;
