import React, { useEffect, useState } from "react";
import "./header.css";
// import './me.png'
const Header = () => {
  const [display, setDisplay] = useState("none");
  const [theme, settheme] = useState("dark");
  useEffect(() => {
    if(theme==='light')
    {
      document.body.classList.remove('dark')
      document.body.classList.add('light') 
    }else {
      document.body.classList.remove('light')
      document.body.classList.add('dark') 
    }
  },[theme]);
  return (
    <header>
      <div className="container">
        <img src="./me.png" alt="" />
        <div
          onClick={() => {
            setDisplay(display ? "" : "display");
          }}
          className="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={display}>
          <li>
            <a className="active" href="">
              About
            </a>
          </li>
          <li>
            <a href="">Article</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">Speacking</a>
          </li>
          <li>
            <a href="">Contect</a>
          </li>
        </ul>
        <button onClick={() => (theme == "dark" ? settheme("light") : settheme("dark"))}>
          <i className={theme==='dark'?"icon-moon-o":'icon-sun'}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
