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
    axios.get(`/api/summarize?url=${this.state.url}`)
    .then(result => {
      this.setState({
        pleaseWait: '',
        summary: result.data
      })
    })
    .catch((err) => {
      this.setState({
        pleaseWait: '',
        summary: 'error. could not summarize.'
      })
    })
    event.preventDefault();
  }
  render() {
    return (
      <div className="App">
        <form className="main-input" onSubmit={this.handleSubmit}>
          <label>
            article URL:
          <input className="input-box" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Summarize Article" />
          <div className="please-wait" >{this.state.pleaseWait}</div>
          <div className="summary" >{this.state.summary}</div>
        </form>
      </div>
    );
  }
}

export default App;
