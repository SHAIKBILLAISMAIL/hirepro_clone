import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="name"><span className="firstletter">R</span> <span className="middleletter">Inno</span><span className="lastletter">Gen</span></div>
      <div className="button_div">
        <button className="button">Find Jobs</button>
      </div>
    </nav>
  );
};

export default NavBar;
