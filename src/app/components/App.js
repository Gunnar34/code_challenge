import Templates from '../data/Templates.js';
import Companies from '../data/Companies.js';
import Guests from '../data/Guests.js';
import React from 'react';
import { FormControl} from 'react-bootstrap';
import styles from '../styles.js';
import { greeting, dateParse } from './helpers.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noGuest: true, //used to display the next dropdown after selecting a guest
      noCompany: true, //used to display the next dropdown after selecting a company
      noTemplate: true, //used to display the submit button after selecting a template
      custom: false, //used to handle a custom template
      showTemplate: false, //used to display the template after submitting
      guestIndex: 0 //used as a starting index so the new Date method in the <p> tags in the render section doesn't error
    };
  }
  createGuestList() {
     let guests = []; //hold guest dropdown options
     for (let i = 0; i < Guests.length; i++) {
       guests.push(<option key={i} value={i}>{Guests[i].firstName + ' ' + Guests[i].lastName}</option>);
     }
     return guests;
   }
   createCompaniesList() {
      let companies = []; //hold company dropdown options
      for (let i = 0; i < Companies.length; i++) {
        companies.push(<option key={i} value={i}>{Companies[i].company}</option>);
      }
      return companies;
    }
    createTemplateList() {
       let templates = []; //hold template dropdown options
       for (let i = 0; i < Templates.length; i++) {
         templates.push(<option key={i} value={i}>{Templates[i].name}</option>);
       }
       return templates;
     }
  onGuestSelected = (e) => {
      this.setState({noGuest: false, guestIndex: e.target.value});
      // sets the state so the next dropdown appears, sets index of the guest to the state to access later
  }
  onCompanySelected = (e) => {
      this.setState({noCompany: false, companyIndex: e.target.value});
      // sets the state so the next dropdown appears, sets index of the company to the state to access later
  }
  onTemplateSelected = (e) => {
      this.setState({noTemplate: false, templateIndex: e.target.value});
      // sets the state so the button appears, sets index of the template to the state to access later
  }
  customTemplate = (e) => {
    if (e.target.value.length > 5) {
        this.setState({noTemplate: false, custom: true, customTemplate: e.target.value});
        // sets the state so the button appears, sets the custom boolean to handle the custom template
    }
  }
  createTemplate = () => {
    this.textarea.value = ''; //reset textarea
    if (this.state.custom) {
      this.setState({showTemplate: true, template: this.state.customTemplate, custom: false});
      //sets the template to the textarea value if a custom template existed
    } else {
      let msgStart = greeting(); //calls imported function
      if (this.state.templateIndex == 0) {
        var tstamp = new Date(Guests[this.state.guestIndex].reservation.startTimestamp);
        //if the index is 0, its the check-in template, time gets set to startTimestamp
      } else {
        var tstamp = new Date(Guests[this.state.guestIndex].reservation.endTimestamp);
        //else endTimestamp
      }
      let timestamp = dateParse(tstamp);
      let message = (<div>
        <p>{msgStart + Guests[this.state.guestIndex].firstName + ' ' + Guests[this.state.guestIndex].lastName + ','}</p>
        <p>{Templates[this.state.templateIndex].body + ' ' + Companies[this.state.companyIndex].company + '!'}</p>
        <p>
          {Templates[this.state.templateIndex].time + ' ' + timestamp + ', '}
          {Templates[this.state.templateIndex].room + ' ' + Guests[this.state.guestIndex].reservation.roomNumber + '.'}
        </p>
        <p>{Templates[this.state.templateIndex].end}</p>
      </div>)
      //JSX object for the template message to display on DOM
      this.setState({showTemplate: true, template: message});
      //set state so it appears
    }
  }
  render() {
    return (
      <div className="container">
        <div>
          <h1>Messaging System</h1>
          {/* object assign on styles to dynamically show hide based on component state. */}
          <FormControl onChange={this.onGuestSelected} componentClass="select" placeholder="select">
            <option style={Object.assign({}, !this.state.noGuest && styles.none)} value="select">select a guest</option>
            {this.createGuestList()}
          </FormControl>
          <div style={Object.assign({}, this.state.noGuest && styles.none)}>
            <p>{'room number: ' + Guests[this.state.guestIndex].reservation.roomNumber}</p>
            <p>{'check In: ' + dateParse(new Date(Guests[this.state.guestIndex].reservation.startTimestamp))}</p>
            <p>{'check Out: ' + dateParse(new Date(Guests[this.state.guestIndex].reservation.endTimestamp))}</p>
          </div>
          <br />
          <FormControl style={Object.assign({}, this.state.noGuest && styles.none)} onChange={this.onCompanySelected} componentClass="select" placeholder="select">
            <option style={Object.assign({}, !this.state.noCompany && styles.none)} value="select">select a company</option>
            {this.createCompaniesList()}
          </FormControl>
          <br />
          <div style={styles.marginTop}>
            <FormControl style={Object.assign({}, this.state.noCompany && styles.none)} onChange={this.onTemplateSelected} componentClass="select" placeholder="select">
              <option style={Object.assign({}, !this.state.noTemplate && styles.none)} value="select">select a template</option>
              {this.createTemplateList()}
            </FormControl>
            <FormControl inputRef={ref => { this.textarea = ref; }} onChange={this.customTemplate} style={Object.assign({}, styles.marginLeft, this.state.noCompany && styles.none)} componentClass="textarea" placeholder="Or make your own" />
          </div>
          <div style={Object.assign({}, this.state.noTemplate && styles.none)}>
            <button style={styles.marginTop} onClick={this.createTemplate}>Submit to create Template</button>
          </div>
        </div>
        <div style={Object.assign({}, !this.state.showTemplate && styles.none)}>
          <h3>Message To Send</h3>
          {this.state.template}
        </div>
      </div>
    );
  }
}
