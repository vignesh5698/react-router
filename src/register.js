import React, { Component } from 'react';
import MultiSelect from "@khanacademy/react-multi-select";
// import  MultiSelectReact  from 'multi-select-react';
import StatefulMultiSelect from "@khanacademy/react-multi-select";
const options = [
  {label: "One", value: 1},
  {label: "Two", value: 2},
  {label: "Three", value: 3},
];

class Register extends Component {

  state = {
    selected1: [],
    selected2 : []
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
        <StatefulMultiSelect
          options={options}
          selected={this.state.selected1}
          onSelectedChanged={selected1 => this.setState({selected1})}
          overrideStrings={{
            selectSomeItems: "Select items for 1...",
            allItemsAreSelected: "All Items are Selected",
            selectAll: "Select All",
            search: "Search",
          }}
        />
        <StatefulMultiSelect
          options={options}
          selected={this.state.selected2}
          onSelectedChanged={selected2 => this.setState({selected2})}
          overrideStrings={{
            selectSomeItems: "Select items for 2...",
            allItemsAreSelected: "All Items are Selected",
            selectAll: "Select All",
            search: "Search",
          }}
        />
       </div>
      </div>
      
     );
  }

}
 
export default Register;