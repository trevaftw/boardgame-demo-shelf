import React, { Component } from 'react';
import { connect } from 'react-redux';

//styling
import './Home.css'

class DemoShelf extends Component {

  componentDidMount() {
    this.fetchGames()
  }

  fetchGames = () => {
    console.log('fetch games')
  }

  render() {
    return (
      <div className="homeDiv">
        <div className="homeBody">
          How many players?<br />
          <select>
            <option>(select)</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6+</option>
          </select><br /><br />
          Skill Level? <br />
          <select>
            <option value="null">(select)</option>
            <option value="Beginner">Beginner</option>
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="homeResults">
          {/* map the results into a component displaying them as a list */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DemoShelf);
