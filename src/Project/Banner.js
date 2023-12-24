import { Component } from "react";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navigation">
        <div className="navbar-collapse column">
          <div className="container">
            <div>
              <h1 className="wedding-banner">Trung & Holl</h1>
            </div>
            <div className="row">
              <div className="col header-font">
                <a href="/Main">
                  {" "}
                  <i className="fa-solid fa-house"></i>HOME
                </a>
              </div>
              <div className="col header-font">
                <a href="/Register">
                  <i className="fa-solid fa-pen-to-square"></i>REGISTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Banner;
