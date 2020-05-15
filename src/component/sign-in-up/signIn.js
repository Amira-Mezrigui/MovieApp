import React, { Component } from "react";
import './sign.css'


export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      Password: "",
    };
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ Password: e.target.value });
  };
  authentification = () => {
    for (let i = 0; i < this.state.email.length; i++) {
      if (this.state.email[i] === localStorage.getItem("email")[i]) {
        if(this.state.Password[i] === localStorage.getItem("password")[i]){
          alert("Bienvenue ")}
      else if(this.state.Password[i] != localStorage.getItem("password")[i])  {
            
            alert("Mot de passe incorrecte");
          } }
      else {
        alert("Veuillez créer un compte");
        }
      
      }
    }
    
  

  render() {
    return (
      <div>
        <form className="form">
        <h1>
            Sign In
          </h1>
          <label for="email" class="email">
            Adresse e-mail
          </label> <br/>
          <input type="email" id="email" onChange={this.handleEmailChange} />
          <label for="password">Mot de passe</label> <br/>
          <input
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
          />
          <button className="formBtn" onClick={this.authentification}>
            Se connecter
          </button>
        </form>
      </div>
    );
  }
}