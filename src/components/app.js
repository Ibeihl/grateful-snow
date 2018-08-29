import React from 'react';
import Header from './header';
import Main  from './main';
import RegistrationPage from './registration-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {refreshAuthToken} from '../actions/auth';
import {connect} from 'react-redux';
import {storeAuthInfo} from '../actions/auth';
import {loadAuthToken} from '../local-storage';

export class App extends React.Component {
  componentDidMount(){
    const authToken = loadAuthToken();
    if (authToken) {
        const token = authToken;
        storeAuthInfo(token, this.props.dispatch);
        // refreshAuthToken();
    }
  }
  
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="App">
          < Header />
          <main>           
            <Route exact path='/' component={Main} />
            <Route path='/login' component={RegistrationPage} />
          </main>
        </div>
       </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(App);