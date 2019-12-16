import React, { Component } from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  state ={
    search_query: ''
  }

  componentDidMount() {
    console.log('Component did Mount')
  }

  handleChange = (event) => {
    console.log("input:", event.target.value)
    this.setState({
      search_query: event.target.value
    })
  }

  handleSubmit = () => {
    alert(`you searched for ${this.state.search_query}`)
  }

  render() {
    return (
      <div>
        <label>Board Game Title:</label>
        <form>
          <input onChange={this.handleChange}></input><input type="button" value="Search" onClick={this.handleSubmit}></input>
        </form>
      </div>
    );
  }

}

export default InfoPage;
