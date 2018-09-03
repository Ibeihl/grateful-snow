import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login';
import RegistrationForm from './register';
import { Jumbotron } from './jumbotron';
import './registration-page.css';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/" />;
    }
    let registrationForm;
    let loginForm;
    if (props.displayRegistration){
        registrationForm = <RegistrationForm/>
    } else {
        loginForm = <LoginForm />
    }

    return (
        <div className="home">
            <Jumbotron />
            <div className="card-deck">
                {registrationForm}
                {loginForm}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    displayRegistration: state.auth.displayRegistration
});

export default connect(mapStateToProps)(RegistrationPage);
