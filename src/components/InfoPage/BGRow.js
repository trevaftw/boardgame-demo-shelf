import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class BGRow extends Component {

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
        <td><button onClick={() => this.handleClick(this.props.bg)}>Add to Demo Shelf</button></td>
      </>
    )
  }
}

const mapStateToProps = state => ({
  state: state,
});

export default withRouter(connect(mapStateToProps)(BGRow))