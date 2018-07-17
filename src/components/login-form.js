import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import Input from "./input";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validators";

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(
      login(values.loginUsername, values.loginPassword)
    );
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <div className="lp-login card" id="lp-login">
        <div className="lp-login__heading">
          <h1 className="lp-login__heading--text">Log in</h1>
        </div>
        <form
          className="login-form lp-login__form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
        >
          {error}
          <label htmlFor="loginUsername">Username</label>
          <Field
            component={Input}
            type="text"
            name="loginUsername"
            id="loginUsername"
            validate={[required, nonEmpty]}
          />
          <label htmlFor="loginPassword">Password</label>
          <Field
            component={Input}
            type="password"
            name="loginPassword"
            id="loginPassword"
            validate={[required, nonEmpty]}
          />
          <button
            className="lp-login__form--button"
            disabled={this.props.pristine || this.props.submitting}
          >
            Log in
          </button>
          <div className="lp-login__form--demo-account">
            <span>Username: DylanS</span>
            <span>Password: 1234567890</span>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
