import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Login extends Component {
  state = {
    name: ""
  }
  changeText = (event) => {
    this.setState({name: event.target.value})
    // console.log(this.state.name)
  }
  
  renderUserPage = () => {
    return (
      <div>
            <h1>Hello</h1>

      </div>
    )

  }

  logout = (response) => {
    console.log(response)
    return(
      <div>
        <h6>LoggedOUT</h6>
      </div>
    )
   
  }

   responseGoogle = (response) => {
    console.log(response);
  }
  render() { 
    

    return ( 
      <div>
        <h1>User Login</h1>
        <input type='text' onChange={this.changeText} value={this.state.name}/>
        <h3>{this.state.name}</h3>   
        <form className='form' action='/about/'>
        <div>
          <div>
          <input type = 'email' placeholder='Enter Mail' value = {this.state.name}></input>

          </div>
        <input type ='submit' className = 'btn btn-success' value= 'Submit' ></input>
        <GoogleLogin
        clientId="102350165241-ite6r1u8frd2f8084t3rts72cea3ofk7.apps.googleusercontent.com"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}
      />        
       <GoogleLogout
    buttonText="Logout"
    onLogoutSuccess={this.logout}
  >
  </GoogleLogout>
      <button type='btn btn-danger' onClick={this.logout}></button>
      </div>
        </form>
</div>

      );
  }
}
 
export default Login;