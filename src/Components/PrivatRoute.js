import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";

const PrivatRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/Login" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivatRoute);
