import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty, isTrimmed } from '../validators';
import { toggleRegistrationForm } from '../actions/toggle-registration';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }
    toggleRegistration() {
        this.props.dispatch(toggleRegistrationForm());
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
            <div className="card">
                <div className="card-header">
                    <legend>Login</legend>
                </div>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <div className="form-group">
                        {error}
                        <label htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                    </div>
                    <button className="btn btn-secondary btn-lg" disabled={this.props.pristine || this.props.submitting}>
                        Log in
                </button>
                    <div className="register-btn">
                        <button
                            onClick={() => this.toggleRegistration()}
                            className="btn btn-outline-secondary btn-lg">Not a member yet? Create an Account</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
