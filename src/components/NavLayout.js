import React, { Component } from 'react';
import logo from '../logo.svg';

import { NavLink, Link } from 'react-router-dom'

export default class NavLayout extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img style={{"height":"45px"}} src={logo} alt="logo"/>
          <NavLink className="navbar-brand" exact to="/">SecretKeeper </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link" exact to="/">Home</NavLink>
              <NavLink className="nav-item nav-link" to="/register">Register</NavLink>
              <NavLink className="nav-item nav-link" to="/login">Log In</NavLink>
            </div>
          </div>
          <Link to="/logout" className="btn btn-danger">Log Out</Link>

        </nav>
        {this.props.children}
      </div>
    );
  }
}
