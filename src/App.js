import React, { useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { Switch, Route, Redirect } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import "./App.css";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-out";
import HomePage from "./pages/homepage/homepage.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import { auth, createUserProfileDocument } from "./firebase/firebase";

import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
