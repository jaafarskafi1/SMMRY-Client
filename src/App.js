import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      summary: '',
      pleaseWait: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      url: event.target.value
    });
  }

  handleSubmit(event) {
    this.setState({
      pleaseWait: 'loading...'
    })
    axios.get(`http://localhost:3005/api/summarize?url=${this.state.url}`)
    .then(result => {
      this.setState({
        pleaseWait: '',
        summary: result.data
      })
    })
    .catch((err) => {
      this.setState({
        summary: 'could not summarize'
      })
    })
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            url:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <div>{this.state.pleaseWait}</div>
          <div>{this.state.summary}</div>
        </form>
      </div>
    );
  }
}

export default App;
