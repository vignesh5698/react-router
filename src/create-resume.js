import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Skills from './skills'

class CreateResume extends Component {
  constructor(props){
    super(props);
    this.state = {
      branch:'cse',
      degree: 'pg',
      startDate : new Date()
    };
  }

  handleChange = (date) => {
    this.setState({
      startDate : date
    })
  }

  degree = (event) => {
    this.setState({degree : event.target.value})
    this.renderEduProfiler(this.state.degree)
  }

  branch = (event) => {
    console.log(event.target.value)

    this.setState({branch : event.target.value})
  }

  renderSchoolA = () => {
    return (
      <div>
        <label for="schoolA"><b>SSLC</b></label>
        <input type="text" placeholder="Enter School Name" name="schoolA" required/>
        <div className='row margin'>
          <div className='col'>
            <input type="text" placeholder="Enter Percentage" name="percentage" required/>
          </div>
          <div className='col'>
            <input type="text" placeholder="Year of Passing" name="year" required/>
          </div>
        </div>
      </div>
    )
  }

  renderSchoolB = () => {
    return (
      <div>
        <label for="schoolB"><b>HSC</b></label>
        <input type="text" placeholder="Enter School Name" name="schoolB" required/>
        <div className='row margin'>
          <div className='col'>
            <input type="text" placeholder="Enter Percentage" name="percentage" required/>
          </div>
          <div className='col'>
            <input type="text" placeholder="Year of Passing" name="year" required/>
          </div>
        </div>
      </div>
    )

  }

  renderDiploma = () => {
    return (
      <div>
        <label for="diploma"><b>Diploma</b></label>
        <input type="text" placeholder="Enter School Name" name="diploma" required/>
        <div className='row margin'>
          <div className='col'>
            <input type="text" placeholder="Enter Percentage" name="percentage" required/>
          </div>
          <div className='col'>
            <input type="text" placeholder="Year of Passing" name="year" required/>
          </div>
        </div>
      </div>
    )
  }

  renderUG = () => {
    return (
      <div>
        <label for="ug"><b>UG</b></label>
        <input type="text" placeholder="Enter College Name" name="ug" required/>
        <div className='row margin'>
          <div className='col'>
            <input type="text" placeholder="Enter Percentage" name="percentage" required/>
          </div>
          <div className='col'>
            <input type="text" placeholder="Year of Passing" name="year" required/>
          </div>
        </div>
      </div>
    )

  }

  renderPG = () => {
    return (
      <div>
        <label for="pg"><b>PG</b></label>
        <input type="text" placeholder="Enter College Name" name="pg" required/>
        <div className='row margin'>
          <div className='col'>
            <input type="text" placeholder="Enter Percentage" name="percentage" required/>
          </div>
          <div className='col'>
            <input type="text" placeholder="Year of Passing" name="year" required/>
          </div>
        </div>
      </div>
    )
  }

  renderEduProfiler = () => {
    let degree = this.state.degree;
    if(degree === 'pg'){
      return(
        <div>
          {this.renderSchoolA()}
          {this.renderSchoolB()}
          {this.renderUG()}
          {this.renderPG()}
        </div>
      )
    }else if(degree === 'ug_hsc'){
      return(
        <div>
          {this.renderSchoolA()}
          {this.renderSchoolB()}
          {this.renderUG()}
        </div>
      )
    }else if(degree === 'ug_dip'){
      return(
        <div>
          {this.renderSchoolA()}
          {this.renderDiploma()}
          {this.renderUG()}
        </div>
      )
    }else if(degree === 'diploma'){
      return(
        <div>
          {this.renderSchoolA()}
          {this.renderDiploma()}
        </div>
      )
    }    
  }

  render() { 
    return ( 
    <div className='cssprop'>
        <div className='title'>
            <h3>Resume Builder</h3>
        </div>
        <div className='heading'>Applicant Details </div>
        <div>
          <form className='form'>
            <label for="name"><b>Name</b></label>
            <input type="text" placeholder="Enter Name" name="name" required/>
            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required/>
            <label for="address"><b>Address</b></label>
            <input type="text" placeholder="Enter Address" name="address" required/>
            <div className='row margin'>
                <div className='col'>
                    <div class="form-group">
                    <label for="name"><b>Select Branch</b></label>
                    <div className = 'branch'>
                    <select class="form-control" id="sel1" onChange={this.branch}>
                        <option value='cse'>CSE</option>
                        <option value='it'>IT</option>
                        <option value='mech'>MECH</option>
                        <option value='eee'>EEE</option>
                        <option value='ece'>ECE</option>
                        <option value='eie'>EIE</option>
                        <option value='auto'>AUTO</option>
                      </select>
                    </div>
                    </div>
                </div>
            <div className='col'>
            <label for="name"><b>Date Of Birth</b></label>
            <div className = 'datePicker dateDiv'>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              useShortMonthInDropdown
            />
            </div>
            </div>
            </div>
            <div>
              <label for="name"><b>Educational Qualification</b></label>
              <div className='degree'>
                <select className = 'form-control' onChange={this.degree}>
                  <option value='pg'>PG</option>
                  <option value='ug_hsc'>UG - HSE</option>
                  <option value='ug_dip'>UG - Dilpoma</option>
                  <option value='diploma'>Diploma</option>
                </select>
              </div>
            </div>
            <div>
              {this.renderEduProfiler()}
            </div>
          </form>
        </div>
        <Skills/>
    </div> 
    );
  }
}
 
export default CreateResume;