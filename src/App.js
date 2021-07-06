import React, { Component } from "react";
import { connect } from "react-redux";
import HomeView from "./redux/views/HomeView";
import { Switch, Route } from "react-router-dom";
import RegisterView from "./redux/views/RegisterView";
import LoginView from "./redux/views/LoginView";
import ContactsView from "./redux/views/ContactsView";
import Container from "./Components/container/Container";
import AppBar from "./Components/AppBar";
import { authOperations } from "./redux/auth";
import PrivatRoute from "./Components/PrivatRoute";
import PublicRoute from "./Components/PublicRoute";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          <PublicRoute
            path="/register"
            redirectedTo="/"
            restricted
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            redirectedTo="/"
            restricted
            component={LoginView}
          />
          <PrivatRoute
            path="/contacts"
            redirectedTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

// const mapDispatchToProps = (dispatch) => ({
//   onGetCurrentUser: () => {},
// });

export default connect(null, mapDispatchToProps)(App);
