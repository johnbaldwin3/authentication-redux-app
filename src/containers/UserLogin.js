import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions';


export default class UserLogin extends Component {

render() {
  const { handleSubmit } = this.props;
  return (
    <Form className="col-md-6 col-offset-md-3">

      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Create a Password" />
      </FormGroup>


      <Button>Login</Button>
    </Form>
  )
}
}
