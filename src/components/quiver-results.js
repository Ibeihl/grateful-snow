import React from 'react';
import { connect } from 'react-redux';
import { getQuiverReport } from '../actions/get-quiver-reports';
import UnfollowButton from './unfollow-button';

class QuiverResults extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.skiAreas)
        if (prevProps.skiAreas.length !== this.props.skiAreas.length) {
            this.props.dispatch(getQuiverReport(this.props.skiAreas))
        }
    }

    renderResults() {
        let errorMessage;
        let loadingMessage;
        let reportElements;

        if (this.props.loading) {
            loadingMessage = <h3>Loading your ski areas...</h3>
        }
        if (this.props.error) {
            errorMessage = <h3>couldnt find any reports</h3>
        }
        if (this.props.quiverReports !== undefined) {
            console.log(this.props.skiAreas)
            console.log(this.props.quiverReports);
            reportElements = this.props.quiverReports.map(report => 
                // <div className="report-element"
                //     id={report.data.request[0].query}
                //     key={report.data.nearest_area[0].areaName[0].value}>
                //     <h3>{report.data.nearest_area[0].areaName[0].value}</h3>
                //     <ul>
                //         <li>Total Snowfall: {report.data.weather[0].totalSnowfall_cm}</li>
                //         <li>Chance of Snow: {report.data.weather[0].chanceofsnow}%</li>
                //         <li>Low Elevation High: {report.data.weather[0].bottom[0].maxtempF}F</li>
                //         <li>Mid Elevation High: {report.data.weather[0].mid[0].maxtempF}F</li>
                //         <li>High Elevation High: {report.data.weather[0].top[0].maxtempF}F</li>
                //         <li>POOP</li>
                //     </ul>
                //     <UnfollowButton id={report.data.request[0].query} />
                // </div>

                <div className="card quiver-report-element"
                    id={report.data.request[0].query}
                    key={report.data.nearest_area[0].areaName[0].value}>
                    <div className="card-header">
                        <h3 className="">{report.data.nearest_area[0].areaName[0].value}</h3>
                    </div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Total Snowfall: {report.data.weather[0].totalSnowfall_cm}</h6>
                        <ul className="card-text">
                            <li>Chance of Snow: {report.data.weather[0].chanceofsnow}%</li>
                            <li>Low Elevation High: {report.data.weather[0].bottom[0].maxtempF}F</li>
                            <li>Mid Elevation High: {report.data.weather[0].mid[0].maxtempF}F</li>
                            <li>High Elevation High: {report.data.weather[0].top[0].maxtempF}F</li>
                            <li>POOP</li>
                        </ul>
                        <UnfollowButton id={report.data.request[0].query} />
                    </div>
                </div>
            )
        }

        return (
            <div className="quiver-results">
                {loadingMessage}
                {errorMessage}
                <div className="card-columns">
                    {reportElements}
                </div>
            </div>
        );
    }

    render() {
        return this.renderResults();
    }
}

const mapStateToProps = state => ({
    error: state.report.quiverError,
    loading: state.report.quiverLoading,
    quiverReports: state.report.quiverReports,
    skiAreas: state.report.skiAreas
})

export default connect(mapStateToProps)(QuiverResults);

