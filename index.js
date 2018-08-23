class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      summary: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    axios.get(`https://api.smmry.com/?SM_API_KEY=${process.env.API_KEY}&SM_URL=${this.state.url}`)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          url:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <div>{this.state.summary}</div>
      </form>
    );
  }
}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById("app"));
