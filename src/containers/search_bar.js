import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index.js';

class SearchBar extends Component {
  constructor(props){
    super(props);
    
    this.state = { term : '' };
    // Makes input completely empty when it first shows up. Allows us to update over time with a change handler
    
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    // Allows us to use this function without arrow function - overwrites local method - If you have a callback that uses 'this' then chances are that it needs to be bound
  }
  
  onInputChange(event) {
    // All DOM event actions come with an event object (argument)
    this.setState({ term: event.target.value });
  }
  
  onFormSubmit(event) {
    event.preventDefault();
    
    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
  
  render () {
    // When you submit a form, the browser automatically attempts it for you - prevent this with an eventHandler on the form to prevent the submit event
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);