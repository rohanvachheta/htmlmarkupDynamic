import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import PropTypes from "prop-types";
import AutoGrid from "../../page/Home";
import CSSGrid from "../../page/Forms";
import RecordsPage from "../../page/Records";

const ButtonMenu = (props) => {
  return (
    <Router>
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

        {/* <hr /> */}

        {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
        <Switch>
          <Route exact path="/">
            <AutoGrid />
          </Route>
          <Route path="/forms">
            <CSSGrid />
          </Route>
          <Route path="/records">
            <RecordsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ButtonMenu.propTypes = {};

export default ButtonMenu;
