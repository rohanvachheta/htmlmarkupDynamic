import React from "react";
import { NavLink } from "react-router-dom";

const ButtonMenu = () => {
  return (
    <div>
      <div
        className="header-nav"
        style={{ display: "flex", marginBottom: "30px" }}
      >
        <div style={{ marginRight: "10px" }}>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </div>
        <div style={{ marginRight: "10px" }}>
          <NavLink to="/forms">Forms</NavLink>
        </div>
        <div>
          <NavLink to="/records">Records</NavLink>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ButtonMenu, () => true);
