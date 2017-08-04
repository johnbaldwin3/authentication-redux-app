import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions';


export default class UserLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }
  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: this.state.email,
      password: this.state.password
    });
    console.log("this.state", this.state);
    this.props.loginUser(this.state, () => {
      this.props.history.push('/login');
    });
  }
render() {
  const { handleSubmit } = this.props;
  return (
    <Form className="col-md-6 col-offset-md-3">

      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input onChange={this.handleEmail} type="email" name="email" id="exampleEmail" placeholder="Your Email" value={this.state.value}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input onChange={this.handlePassword} type="password" name="password" id="examplePassword" placeholder="Create a Password" value={this.state.value} />
      </FormGroup>


      <Button>Login</Button>
    </Form>
  )
}
}
