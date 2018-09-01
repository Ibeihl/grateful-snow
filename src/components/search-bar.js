import React from 'react';
import { connect } from 'react-redux';
import { getReport } from '../actions/get-report';
import Results from './results';
import './search-bar.css';

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
            <div className="search-bar">
                <h2>Find a Ski Area!</h2>
                <form className="form" onSubmit={e => this.handleSubmit(e)}>
                    <div className="form-group row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-4">
                            <label className="sr-only" htmlFor="city">City</label>
                            <input type="text" className="form-control mb-2 mr-sm-2" id="city" placeholder="Sun Valley" />
                        </div>
                        <div className="col-sm-2">
                            <label className="sr-only" htmlFor="state">State</label>
                            <input type="text" className="form-control" id="state" placeholder="id" />
                        </div>
                        <div className="col-sm-2">
                            <button type="submit" className="btn btn-secondary mb-2">Get Snow Report</button>
                        </div>
                    </div>
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
