import { Component } from "react";
import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navigation">
        <div className="navbar-collapse column">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <a href="#">Home</a>
              </div>
              <div className="col-sm">
                <a href="#">Register</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Banner;
