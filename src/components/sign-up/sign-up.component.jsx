import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="displayName"
            name="displayName"
            label="display name"
            handleChange={this.handleChange}
            value={displayName}
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={email}
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            handleChange={this.handleChange}
            value={password}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            label="confirm password"
            handleChange={this.handleChange}
            value={confirmPassword}
            required
          />

          <div className="button-container">
            <CustomButton type="submit">Sign Up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
