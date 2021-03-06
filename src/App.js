import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthenticationPage from "./pages/authentication/authentication.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import {
  auth,
  createUserProfileDocument,
  // ,migrateCollectionsAndDocuments
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { hideCart } from "./redux/cart/cart.actions";
import { selectCartTotal } from "./redux/cart/cart.selectors";
// import { selectCollectionsForShop } from "./redux/shop/shop.selectors";

import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {
      setCurrentUser,
      hideCart,
      // , collectionsArray
    } = this.props;

    hideCart();

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        let userReference = await createUserProfileDocument(userAuth);

        userReference.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

      // Left in to demonstrate the call made to transfer our SHOP_DATA from a local file to
      // Our Firestore database.

      // migrateCollectionsAndDocuments(
      //   "collections",
      //   collectionsArray.map(({ title, items, id }) => ({ title, items, id }))
      // );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/checkout"
            render={() =>
              this.props.cartTotal > 0 ? <CheckoutPage /> : <Redirect to="/" />
            }
          />

          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <AuthenticationPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  hideCart: () => dispatch(hideCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
