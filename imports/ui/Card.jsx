import React, { Component } from 'react';


export default class Card extends Component {
  render() {
    return (<li className="card">
      <img src={this.props.url} width="400px" />
    </li>);
  }
}