import React, { Component } from 'react';
import './App.css';
import Register from './register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about';
import Login from './login';
import Index from './home'
import CreateResume from './create-resume';

class App extends Component {
  render() {
    return (
        <Router>
          <div className = 'homePage'>
            <Link to="/">Home </Link>
            <Link to="/about/" className='homePage'>About </Link>
            <Link to="/login/" className='homePage'>Login </Link>
            <Link to="/register/" className='homePage'>Register</Link>
            <Link to="/create-resume/" className='homePage'>Create Resume</Link>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/login/" component={Login} />
          <Route path="/register/" component={Register}/>
          <Route path="/create-resume" component={CreateResume}/>
          </div>
        </Router>
    );
  }
}

export default App;
