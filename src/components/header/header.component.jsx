import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ShoppingCartIcon from "../cart-icon/cart-icon.component";
import CartModal from "../cart-modal/cart-modal.component";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser, isVisible }) => (
  <div className="header">
    <Link to="/" className="icon header-link">
      Placeholder Icon
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

const mapStateToProps = ({ user: { currentUser }, cart: { isVisible } }) => ({
  currentUser,
  isVisible
});

export default connect(mapStateToProps)(Header);
