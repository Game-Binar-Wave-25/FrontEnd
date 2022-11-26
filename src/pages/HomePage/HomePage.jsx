import { Component } from "react";

class Home extends Component {
    handleLogout = () => {
        localStorage.removeItem('jwt-token')
        window.location.href = '/Register'
       }   
   
    render() {
    console.log(localStorage.getItem('jwt-token'))
    if(localStorage.getItem('jwt-token') === null) {
        alert ("Please Login or Sign Up")
        window.location.href = '/login'
    } 
     
    

    return (
        <div>
        <h1>Halo, welcome</h1>
        <button type="submit" onClick={this.handleLogout}> Logout </button>
        </div>
    )
   }
}
export default Home;