import React from 'react';
import { connect } from 'react-redux';

class Results extends React.Component {
    componentDidUpdate() {
        console.log(this.props.loading);
        this.renderResults();
    }
    renderResults() {
        let loadMessage;
        let errorMessage;
        let reportElements;
        if (this.props.loading === true) {
            loadMessage = <h3>loading.....</h3>
        }
        if (this.props.error) {
            errorMessage = <h3>couldnt find any reports</h3>
        }
        if (this.props.report !== null) {
            let report = this.props.report;
            reportElements = 
                    <div className="report-element" key={report.data.nearest_area[0].areaName[0].value}>
                    <h3>{report.data.nearest_area[0].areaName[0].value}</h3>
                    <ul>
                        <li>Total Snowfall: {report.data.weather[0].totalSnowfall_cm}</li>
                        <li>Chance of Snow: {report.data.weather[0].chanceofsnow}%</li>
                        <li>Low Elevation High: {report.data.weather[0].bottom[0].maxtempF}F</li>
                        <li>Mid Elevation High: {report.data.weather[0].mid[0].maxtempF}F</li>
                        <li>High Elevation High: {report.data.weather[0].top[0].maxtempF}F</li>
                        <li></li>
                    </ul>
                </div>   
            }

        return (
            <div className="results">
                {loadMessage}
                {errorMessage}
                {reportElements}
            </div>
        );
    }
    
    render() {
        return this.renderResults();
    }
}

const mapStateToProps = state => ({
    error: state.report.error,
    loading: state.report.loading,
    report: state.report.searchReport
})

export default connect(mapStateToProps)(Results);

