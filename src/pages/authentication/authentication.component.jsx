import React from "react";

import Header from "../../components/header/header.component";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./authentication.styles.scss";

const AuthenticationPage = () => (
  <div className="authentication-page">
    <Header />
    <div className="authentication">
      <SignIn className="authentication-form" />
      <SignUp className="authentication-form" />
    </div>
  </div>
);

export default AuthenticationPage;
