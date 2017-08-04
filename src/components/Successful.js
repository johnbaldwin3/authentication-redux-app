import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Successful extends Component {
  render() {
    return (
      <div>
        <div><h2 className="text-center">User Successfully Created</h2></div>
        <Link className="btn btn-success" to="/login">Log In Now</Link>
        <Link className="btn btn-danger" to="/">Back to Home</Link>
      </div>

    )
  }
}
