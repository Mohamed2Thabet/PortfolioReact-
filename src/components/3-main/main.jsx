import React, { useState } from "react";
import "./main.css";
const myProjects = [
  {
    projectTitle: "react project",
    category: ["react", "css"],
    ImagePath: "./image/1.jpg",
  },
  {
    projectTitle: "css project",
    category: ["react",'js'],
    ImagePath: "./image/2.jpg",
  },
  {
    projectTitle: "css project",
    category: ["css"],
    ImagePath: "./image/3.webp",
  },
  {
    projectTitle: "css project",
    category: ["js"],
    ImagePath: "./image/4.webp",
  },
  {
    projectTitle: "css project",
    category: ["css",'js'],
    ImagePath: "./image/5.webp",
  },
  {
    projectTitle: "css project",
    category: ["react",'node'],
    ImagePath: "./image/6.avif",
  },
];
const Main = () => {
  const [active, setactive] = useState("all");
  const [arr, setarr] = useState(myProjects);
  const handleClick = (category) => {
    setactive(category);
    const newArrey = myProjects.filter((item) => {
      return item.category.find((subItem) => {
        return category === subItem;
      });
    });
    setarr(newArrey);
  };
  return (
    <section className="main">
      <div className="container">
        <nav>
          <button
            className={active === "all" ? "active" : ""}
            onClick={() => {
              setactive("all");
              setarr(myProjects);
            }}
          >
            All Projct
          </button>
          <button
            className={active === "css" ? "active" : ""}
            onClick={() => {
              handleClick("css");
            }}
          >
            HTML & CSS
          </button>
          <button
            className={active === "js" ? "active" : ""}
            onClick={() => {
              handleClick("js");
            }}
          >
            JavaScript
          </button>
          <button
            className={active === "react" ? "active" : ""}
            onClick={() => {
              handleClick("react");
            }}
          >
            React & MUI
          </button>
          <button
            className={active === "node" ? "active" : ""}
            onClick={() => {
              handleClick("node");
            }}
          >
            Node & Express
          </button>
        </nav>
        <div className="view-projcet">
          {arr.map((project) => {
            return (
              <div className="card">
                <div className="image">
                  <img src={project.ImagePath} alt="" />
                </div>
                <div className="text-info">
                  <h3>{project.projectTitle}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum aliquam dicta fugit. Excepturi iure blanditiis ex fuga
                    sit alias, qui et? Atque perferendis voluptatem nostrum
                    nemo. Repellendus, minima. Illo, maxime.
                  </p>
                  <div className="icons">
                    <div className="icon">
                      <a href="" className="icon-github"></a>
                      <a href="" className="icon-link"></a>
                    </div>
                    <div className="more">
                      <p>more</p>
                      <i className="icon-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Main;
