import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchResult from './SearchResult.js'

//styling
import './Home.css'

class Home extends Component {

  state = {
    players: "null",
    skill: "null"
  }

  fetchGames = (option) => (event) => {
    this.setState({
      [option]: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.players !== "null" && this.state.skill !== "null") {
      this.props.dispatch({ type: "FETCH_GAMES", payload: this.state })
    } else if (this.state.players === "null" && this.state.skill === "null") {
      alert('Please select both options')
    } else if (this.state.skill === "null") {
      alert('Please select skill level')
    } else if (this.state.players === "null") {
      alert('Please select number of players')
    }
  }

  render() {
    return (
      <div className="homeDiv">
        <div className="homeBody">
          How many players?<br />
          <select onChange={this.fetchGames('players')}>
            <option value="null">(select)</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6+</option>
          </select><br /><br />
          Skill Level? <br />
          <select onChange={this.fetchGames('skill')}>
            <option value="null">(select)</option>
            <option value="Beginner">Beginner</option>
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select><br />
          <br />
          <button onClick={this.handleClick}>Search</button>
        </div>
        <center>Results:</center>
        {(this.props.state.fetchReducer === "no results") &&
          <div className="homeResults"><br />
            <center>Sorry, we do not have any demos that match</center>
          </div>
        }
        {this.props.state.fetchReducer[0] && this.props.state.fetchReducer[0].name &&
          this.props.state.fetchReducer.map(
            bg => <SearchResult bg={bg} key={bg.serial_id} />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(Home);
