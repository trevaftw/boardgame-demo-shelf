import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


//components
import BGRow from './BGRow'

class InfoPage extends Component {

  state = {
    search_query: ''
  }

  componentDidMount() {
    console.log('Component did Mount')
  }

  handleChange = (event) => {
    this.setState({
      search_query: event.target.value
    })
  }

  handleSubmit = () => {
    let searchQuery = this.state.search_query
    if (searchQuery.trim() === '') {
      alert('Err - no blank inputs')
    } else {
      this.props.dispatch({ type: "BG_SEARCH", payload: searchQuery });
      this.setState({
        search_query: ''
      })
    }
  }

  render() {
    return (
      <>
        <div>
          <form>
            <label>Board Game Title:</label>
            <input onChange={this.handleChange} value={this.state.search_query}></input><input type="submit" value="Search" onClick={this.handleSubmit}></input>
          </form>
        </div>
        <div>
          Skill Levels:<br />
          <ul>
            <li>Easy - Have only played "classic" games such as Monopoly</li>
            <li>Beginner - Have played modern easy games (Catan, Pandemic, Tickdet to Ride)</li>
            <li>Intermediate - ???</li>
            <li>Advanced - ???</li>
          </ul>
        </div>
        <div>
          <h2>Results:</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Range of Players</th>
                <th>Playtime</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.state.bgSearchReducer.games &&
                this.props.state.bgSearchReducer.games.map(
                  (bg) => {
                    return (
                      <tr key={bg.id} ><BGRow bg={bg} /></tr>
                    )
                  }
                )
              }
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  state: state,
});

export default withRouter(connect(mapStateToProps)(InfoPage));
