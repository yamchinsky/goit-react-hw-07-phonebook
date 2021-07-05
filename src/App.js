import React, { Component } from "react";
import { connect } from "react-redux";
import HomeView from "./redux/views/HomeView";
import { Switch, Route } from "react-router-dom";
import RegisterView from "./redux/views/RegisterView";
import LoginView from "./redux/views/LoginView";
import ContactsView from "./redux/views/ContactsView";
// import authOperations from "./redux/auth/auth-operations";

class App extends Component {
  componentDidMount() {
    // this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetCurrentUser: () => {},
});

// onGetCurrentUser: authOperations.getCurrentUser,

export default connect(null, mapDispatchToProps)(App);
