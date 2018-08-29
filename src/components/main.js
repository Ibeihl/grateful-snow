import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { loadAuthToken } from '../local-storage';
import { setAuthToken } from '../actions/auth';
import SearchBar from './search-bar';
// import AddLocation from './add-location';
import UserGreeting from './user-greeting';
import Quiver from './quiver';

export class Main extends React.Component {
    componentDidMount() {
        const authToken = loadAuthToken();
        if (authToken) {
            const token = authToken;
            this.props.dispatch(setAuthToken(token));
        }
    }

    render() {
        return (
            <div className="main">
                <UserGreeting />
                <Quiver />
                <SearchBar />
                {/* <AddLocation /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.authToken,
});

export default requiresLogin()(connect(mapStateToProps)(Main));