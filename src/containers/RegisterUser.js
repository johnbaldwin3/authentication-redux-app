import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/index';
import { bindActionCreators } from 'redux';

class RegisterUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      full_name: '',
      email: '',
      password: '',
      message: ''
    }
  }
  handleName = (e) => {
    this.setState({full_name: e.target.value});
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
    this.setState({
      full_name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      message: this.state.message
    });
    console.log("this.state", this.state);
    this.props.register(this.state, () => {
      this.props.history.push('/success');
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
        <Input onChange={this.handleEmail} type="email" name="email" id="exampleEmail" placeholder="Your Email" value={this.state.value}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input onChange={this.handlePassword} type="password" name="password" id="examplePassword" placeholder="Create a Password" value={this.state.value}/>
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input onChange={this.handleMessage} type="textarea" name="text" id="exampleText" value={this.state.value}/>
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
        register: register
    }, dispatch)
}

export default connect (mapStateToProps, mapDispatchToProps)(RegisterUser);
