import React, { Component } from 'react';
import { connect } from 'react-redux';

class DemoShelf extends Component {

  componentDidMount() {
    this.fetchGames()
  }

  fetchGames = () => {
    console.log('fetch games')
  }

  render() {
    return (
      <div>
        This page will display the boardgames
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(DemoShelf);
