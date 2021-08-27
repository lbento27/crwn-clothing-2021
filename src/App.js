import React from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
//Switch as soon as it find a match, path, route will exit and match with that one, the only that will render

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //if exists, userAuth is null when signing out
        const userRef = await createUserProfileDocument(userAuth);

        //get data from the created user or from the already stored user with snapshot and save to the sate object
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            //snapshot is a method in fireStore that gives us some property´s to get that reference "store" data we use .data() o that snapshot
            id: snapshot.id,
            ...snapshot.data(),
          });
          //console.log(this.state);
          //console.log(setCurrentUser);
        });
      } else {
        //this.setState({ currentUser: userAuth }); //same as currentUser = null, if logs out
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); //close when component unmount
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
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

const mapStateToProps = ({ user }) => ({
  //form state destructed user reducer
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
