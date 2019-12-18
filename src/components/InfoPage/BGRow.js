import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class BGRow extends Component {

  state = {
    ...this.props.bg,
    skill_level: "null"
  }

  handleChange = (event) => {
    this.setState({
      skill_level: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.skill_level === "null") {
      alert('select skill level before adding to demo shelf')
    } else {
      alert(`Added ${this.state.name} to demo shelf library`)
      this.props.dispatch({ type: "ADD_BG", payload: this.state })
    }
  }

  render() {
    return (
      <>
        <td>{this.props.bg.name}</td>
        <td>{this.props.bg.min_players} - {this.props.bg.max_players}</td>
        <td>{this.props.bg.min_playtime} - {this.props.bg.max_playtime}</td>
        <td>{this.props.bg.description_preview}</td>
        <td><button onClick={this.handleClick}>Add to Demo Shelf</button><br />
          <select onChange={this.handleChange}>
            <option value="null">(select)</option>
            <option value="Beginner">Beginner</option>
            <option value="Easy">Easy</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select> </td>
      </>
    )
  }
}

const mapStateToProps = state => ({
  state: state,
});

export default withRouter(connect(mapStateToProps)(BGRow))