import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron bg-danger">
          <h1 className="display-3 text-white">Got Secrets?</h1>
          <p className="lead text-white">Your Trapper-Keeper&trade; for secrets. Sign up today. It's easy, free, and about as reliable as somebody you sort of trust!</p>
          <hr className="my-4"/>
          <p>Create an account to get started, or log back in if you're already a Secret Keeper.</p>
          <p className="lead">
            <Link className="btn btn-primary btn-lg" to="/register" role="button">Register</Link>
            {' '}
            <Link className="btn btn-success btn-lg" to="/login" role="button">Log Back In</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
