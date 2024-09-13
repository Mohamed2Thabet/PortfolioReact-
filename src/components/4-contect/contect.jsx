import React from "react";
import "./contect.css";
const Contect = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="title">
          <h3>
            <span className="icon-envelope-o"></span>
            Contect us
          </h3>
          <p>
            Contact us for more information and Get notified when I publish
            something new.
          </p>
        </div>
        <div className="box">
          <form>
            <label htmlFor="email">Email Address: </label>
            <input type="email" id="email" />

            <label htmlFor="mes">your message: </label>
            <textarea name="" id="mes"></textarea>

            <button>Submit</button>
          </form>
          <div className="image">
            <img src="./landing-image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contect;
