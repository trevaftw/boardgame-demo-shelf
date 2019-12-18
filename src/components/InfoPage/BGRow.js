import React, { Component } from 'react';

class BGRow extends Component {
  render() {
    return (
      <>
        <td>{this.props.bg.name}</td>
        <td>{this.props.bg.min_players} - {this.props.bg.max_players}</td>
        <td>{this.props.bg.min_playtime} - {this.props.bg.max_playtime}</td>
        <td>{this.props.bg.description_preview}</td>
        <td><button>Add to Demo Shelf</button></td>
      </>
    )
  }
}

export default BGRow;
