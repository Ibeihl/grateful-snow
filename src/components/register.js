import React from 'react';
import { toggleRegistrationForm } from "../actions/toggle-registration";
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');



export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const { username, password, firstName, lastName } = values;
        const user = { username, password, firstName, lastName };
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    toggleRegistration() {
        this.props.dispatch(toggleRegistrationForm());
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <legend>Register</legend>
                </div>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                        <label htmlFor="firstName">First name</label>
                        <Field component={Input} name="firstName" />
                        <label htmlFor="lastName">Last name</label>
                        <Field component={Input} type="text" name="lastName" />
                        <label htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                        <label htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            validate={[required, passwordLength, isTrimmed]}
                        />
                        <label htmlFor="passwordConfirm">Confirm password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="passwordConfirm"
                            validate={[required, nonEmpty, matchesPassword]}
                        />
                        <button
                            type="submit"
                            className="btn btn-secondary btn-lg"
                            disabled={this.props.pristine || this.props.submitting}>
                            Register
                </button>
                    <div className="register-btn">
                        <button
                            onClick={() => this.toggleRegistration()}
                            className="btn btn-outline-secondary btn-lg">Already a member? Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
