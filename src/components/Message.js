import React, { Component } from 'react';


export default class Message extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">
          Welcome, {this.props.user.full_name}
        </div>
        <div className="card-block">
          <h4 className="card-title">Your Special Message is:</h4>
          <p className="card-text">{this.props.user.message}</p>
          <div className="card-footer text-muted">
            {this.props.user.email}
          </div>
        </div>
      </div>
        )
  }
}
