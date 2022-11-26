import React from "react"
import authFirebase from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css"
const {Component} = require("react")


class Login extends Component {
  state= {
    email: '',
    password: ''
  }


  handleLogin= () => {
    console.log(this.state);

    signInWithEmailAndPassword (authFirebase, this.state.email, this.state.password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('jwt-token', user.accessToken)
    alert('LOGIN SUCCESS')
    window.location.href= './'
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

  }

  handleOnChange= (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <div className="main">
        <div className="sub-main">
      <h1>Sign In</h1>
      <label>Email address</label>
      <br/>
      <input placeholder="" id="email" onChange={this.handleOnChange}/>
      <br/>
      <label>Password</label>
      <br/>
      <input placeholder="" type="password" id="password" onChange={this.handleOnChange}/>
      <br/>
      <button className="button-sign gradient" type="submit" onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}
    


export default Login