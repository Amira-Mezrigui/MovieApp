import React, { Component } from "react";
import './sign.css'


export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      newEmail: "",
      newPassword: "",
    };
  }

  handleEmailChange = (e) => {
    localStorage.setItem("email", e.target.value);
    this.setState({ newEmail: e.target.value });
  };
  handlePasswordChange = (e) => {
    localStorage.setItem("password", e.target.value);
    this.setState({ newPassword: e.target.value });
  };
  render() {
    let email = localStorage.getItem("email");
    let pass = localStorage.getItem("password");
    

    return (
      <div>
        <form className="form">
          <h1>
            Sign Up
          </h1>
          <label for="email">E-mail</label>
          <input type="email" id="email" onChange={this.handleEmailChange} />
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          />
          <button className="formBtn"> S'inscrire </button>
        </form>
      </div>
    );
  }
}
