import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import { bindActionCreators } from 'redux';

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      message: ''
    }
  }
  handleName = (e) => {
    this.setState({name: e.target.value});
  }
  handleEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }
  handleMessage = (e) => {
    this.setState({message: e.target.value});
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({name: this.state.name, email: this.state.email, password: this.state.password, message: this.state.message});
    this.props.createUser(this.state, () => {
      this.props.history.push('/login');
    });
  }
render() {
  return (
    <Form onSubmit={this.handleFormSubmit} className="col-md-6 col-offset-md-3">
      <FormGroup>
        <Label for="name">Name</Label>
        <Input onChange={this.handleName}
          type="text" name="name" id="name" placeholder="Your Full Name" value={this.state.value}/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Your Email" value={this.state.value}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Create a Password" value={this.state.value}/>
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" value={this.state.value}/>
        <FormText color="muted">
          Create Your Secret Message
        </FormText>
      </FormGroup>

      <Button type="submit">Submit</Button>
    </Form>
  )
}
}
function mapStateToProps(state) {
  return {
    userInfo: state
  }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createUser: createUser
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(RegisterUser);
