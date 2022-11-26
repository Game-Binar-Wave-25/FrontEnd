import React from "react"
import authFirebase from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './register.css'
const {Component} = require("react")

class Register extends Component {
  state= {
    email: '',
    password: ''
  }

//   state = {}
//   set = name => event=> {
//     this.setState ({
//       [name] : event.target.value
//     })
//   }

  handleRegister= () => {
    console.log(this.state);

    createUserWithEmailAndPassword (authFirebase, this.state.email, this.state.password)
  .then((userCredential) => {
    // const user = userCredential.user;
    alert ('REGISTER SUCCESS, PLEASE LOGIN')
    window.location.href= './Login'
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert (errorMessage)
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
      <h1>Sign Up</h1>
      <label>Email address</label>
      <br/>
      <input placeholder="" id="email" onChange={this.handleOnChange}/>
      <br/>
      <label>Password</label>
      <br/>
      <input placeholder="" type="password" id="password" onChange={this.handleOnChange}/>
      <br/>
      <button className="button-sign gradient" type="submit" onClick={this.handleRegister}>REGISTER</button>
        </div>
      </div>
    );
  }
}


export default Register
