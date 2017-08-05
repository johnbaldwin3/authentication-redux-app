import React, { Component } from 'react';

export default class NotAuthorized extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Not Authorized</h1>
          <p className="lead">You are not authorized to view this content. You must first sign up or login to view this page.</p>
        </div>
      </div>
    )
  }
}
