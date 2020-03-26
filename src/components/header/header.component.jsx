import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShoppingCartIcon from "../cart-icon/cart-icon.component";
import CartModal from "../cart-modal/cart-modal.component";

import { selectCartVisible } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser, isVisible, isCategory }) => (
  <div className={isCategory ? "category-header" : "header"}>
    <Link to="/" className="icon header-link">
      Home
    </Link>
    <div className="header-option-container">
      {currentUser ? (
        <div className="header-link" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link to="/signup" className="header-link">
          Sign In
        </Link>
      )}
      <Link to="/shop" className="header-link">
        Shop
      </Link>
      <ShoppingCartIcon />
    </div>

    {isVisible ? <CartModal /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isVisible: selectCartVisible
});

export default connect(mapStateToProps)(Header);
