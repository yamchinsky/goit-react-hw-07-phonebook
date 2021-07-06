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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
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
