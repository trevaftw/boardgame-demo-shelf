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
    // alert(`you searched for ${this.state.search_query}`)
    let searchQuery = this.state.search_query
    this.props.dispatch({ type: "BG_SEARCH", payload: searchQuery });
    this.setState({
      search_query: ''
    })
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
                      <tr key={bg.id} ><BGRow bg={bg}/></tr>
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
