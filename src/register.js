import React, { Component } from 'react';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  {label: "One", value: 1},
  {label: "Two", value: 2},
  {label: "Three", value: 3},
];

class Register extends Component {

  state = {
    selected: [],
  }

  val = (event) => {
    console.log(event.target.value)
  }

  render() { 
    const {selected} = this.state;
    return ( 
      <div>
        <div className='cssprop'>
                <h4>hello</h4>
                <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="alert alert-secondary" role="alert" value='sample' onClick={this.value}>
          A simple secondary alert—check it out!
        </div>
        <div class="alert alert-secondary" role="alert" value='sample' onClick={this.value}>
          A simple secondary alert—check it out!
        </div>
          <div class="dropdown-item" value='smape' onClick={this.val}>Something else here</div>
          </div>
        </div>
       </div>
       <div>
        <MultiSelect
          options={options}
          selected={selected}
          onSelectedChanged={selected => this.setState({selected})}
        />
       </div>
      </div>
      
     );
  }
}
 
export default Register;