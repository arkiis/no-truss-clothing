import React from "react";

import { Switch, Route } from "react-router-dom";

import "./App.css";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-out";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;