import React, { Component } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

export default class signup extends Component {
  render() {
    return (
      <div>
        <Form className="signup-form">
          <h1 className="text-center">
            <span className="font-weight-bold">Sign Up Form</span>
          </h1>
          <h2 className="text-center">Welcome</h2>
          <FormGroup>
            <Input type="text" placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Input type="password" placeholder="Re-Password" />
          </FormGroup>
          <Button className="btn-lg btn-block">Sign Up</Button>
          <div className="text-center pt-3">Or</div>
          <FacebookLoginButton className="mt-3 mb-3">
            <span>Sign up with Facebook</span>
          </FacebookLoginButton>
          <GoogleLoginButton className="mt-3 mb-3">
            <span>Sign up with Google</span>
          </GoogleLoginButton>
          <div className="text-center">
            <a href="/">back to login</a>
          </div>
        </Form>
      </div>
    );
  }
}
