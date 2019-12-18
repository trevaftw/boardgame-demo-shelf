import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class BGRow extends Component {

  state = this.props.bg

  handleChange = (event) => {
    this.setState({
      ...this.state,
      skill_level: event.target.value
    })
  }

  handleClick = (bg) => {
    console.log(bg)
    //add a dispatch to add this to the demo shelf db
    this.props.dispatch({ type: "ADD_BG", payload: bg })
  }

  render() {
    return (
      <>
        <td>{this.props.bg.name}</td>
        <td>{this.props.bg.min_players} - {this.props.bg.max_players}</td>
        <td>{this.props.bg.min_playtime} - {this.props.bg.max_playtime}</td>
        <td>{this.props.bg.description_preview}</td>
        <td><button onClick={() => this.handleClick(this.props.bg)}>Add to Demo Shelf</button><br />
          <select onChange={this.handleChange}>
            <option value="Beginner">Beginner</option>
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select> </td>
          <td>{JSON.stringify(this.state, null, 2)}</td>
      </>
    )
  }
}

const mapStateToProps = state => ({
  state: state,
});

export default withRouter(connect(mapStateToProps)(BGRow))