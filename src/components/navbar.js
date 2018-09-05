import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './navbar.css';

export class Navbar extends React.Component {
    logOut() {
        // this.props.dispatch(clearDrinks());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                // <button onClick={() => this.logOut()}>Log out</button>
                <li className="nav-item active">
                    <a onClick={() => this.logOut()} className="nav-link" href="">Log Out</a>
                </li>
            );
        }
        let user = this.props.currentUser;
        user = user.charAt(0).toUpperCase() + user.slice(1);

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="">Snow More Problems</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="">About <span className="sr-only">(current)</span></a>
                        </li>
                        {logOutButton}
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Log Out</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li> */}
                    </ul>
                    <span className="navbar-text">
                        Welcome Back {user}
                    </span>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser.firstName,
    user: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);