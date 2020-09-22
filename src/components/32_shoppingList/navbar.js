// import React, { Component } from "react";
import React from "react";

const NavBar = ({ totalCompteurs }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light">
        <a className="navbar-brand" href="#top">
          Navbar #
          <span className="badge badge-pill badge-secondary">
            {totalCompteurs}
          </span>
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
