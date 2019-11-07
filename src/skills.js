import React, { Component } from 'react';
import MultiSelect from "@khanacademy/react-multi-select";
import StatefulMultiSelect from "@khanacademy/react-multi-select";

const techSkills = [
  {label: "price.item1", value: 1},
  {label: "price.item2", value: 2},
  {label: "price.item3", value: 3},
  {label: "price.item4", value: 4},
  {label: "price.item5", value: 5}

];

const personalSkills = [
    {label: "price.item6", value: 6},
    {label: "price.item7", value: 7},
    {label: "price.item8", value: 8},
    {label: "price.item9", value: 9},
    {label: "price.item10", value: 10}
]
class Skills extends Component {
    state = {
        selected : [],
        selectedTechSkills: [],
        selectedPersonalSkills: []
    }
    render() { 
        return (
            <div>
                <label for="address"><b>Skills</b></label><br></br>
                <label for="address"><i>Technical Skills</i></label><br></br>
                <StatefulMultiSelect
                    options={techSkills}
                    selected={this.state.selectedTechSkills}
                    onSelectedChanged={selectedTechSkills => this.setState({selectedTechSkills})}
                    overrideStrings={{
                        selectSomeItems: "Select upto five skills...",
                        allItemsAreSelected: "All Items are Selected",
                        selectAll: "Select All",
                        search: "Search",
                    }}
                />
                <br></br>
                <label for="address"><i>Personal Skills</i></label><br></br>
                <StatefulMultiSelect
                    options={personalSkills}
                    selected={this.state.selectedPersonalSkills}
                    onSelectedChanged={selectedPersonalSkills => this.setState({selectedPersonalSkills})}
                    overrideStrings={{
                        selectSomeItems: "Select upto five skills...",
                        allItemsAreSelected: "All Items are Selected",
                        selectAll: "Select All",
                        search: "Search",
                    }}
                />
                <br></br>
            </div>
    );
    }
}
 
export default Skills;