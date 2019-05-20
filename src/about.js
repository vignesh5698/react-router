import React, { Component } from 'react';
import {Dropbox}  from 'dropbox'
class About extends Component {
  getData = () => {
 
    //AUTHORIZATION
    const options = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sNbYsawiNNAAAAAAAAAAkaj8r5ICyJ5RrcQMgQbdsqMbJZtLwNdKNO7Ql_QmpIMi',
      }
    };

    fetch("https://api.dropboxapi.com/2/users/get_current_account", options)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

      //FILE GET
    const params = { limit: 1000 };
    const options_file = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer sNbYsawiNNAAAAAAAAAAktVWOvwY3kdaEGmd3PrAwfxftPj-T6fFaUbD2cUr9jAk',
        'Content-Type': 'application/json'
      },
      data: {
        limit: 1000
      },
      body: JSON.stringify(params)
    };

    fetch("https://api.dropboxapi.com/2/file_requests/list_v2", options_file)
    .then(res => res.json())
    .then(
    (result) => {
      console.log(result)
    },
    (error) => {
      
    })   

  }
  render() { 
    

    return ( 
      <div>
        <h1>Hello About</h1>
        <button onClick={this.getData}>Get Data</button>
      </div>
      );
  }
}
 
export default About;