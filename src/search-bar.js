import React from 'react';
import { connect } from 'react-redux';
import { getReport } from './actions/get-report';
import Results from './results';

export class SearchBar extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        let searchCity = e.target.city.value;
        let searchState = e.target.state.value;
        searchCity = searchCity.split(' ').join('+');
        this.props.dispatch(getReport(`${searchCity},${searchState}`))
    }

    render() {
        return (
            <div>
                <form className="search-bar" onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>Choose your Ski Area</legend>
                        <h2>Enter the closest city and state!</h2>
                        <label htmlFor="city">Enter City and State</label>
                        <input type="text" name="city" placeholder="jackson" />
                        <label htmlFor="state">Enter State</label>
                        <input type="text" name="state" placeholder="wy" />
                        <button type="submit" >Get Snow Report</button>
                    </fieldset>
                </form>
                <Results/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.report.error,
    loading: state.report.loading,
    reports: state.report.reports
})

export default connect(mapStateToProps)(SearchBar);
