import React from 'react';
import './footer.css'
const Footer = () => {
  return (
  <footer>
    <div className="container">
    <ul >
          <li >
            <a className="active"href="">About</a>
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
        <p>&copy; <span>2024</span> Spencer Sharp. All rights reserved</p>
    </div>
  </footer>
  );
}

export default Footer;
