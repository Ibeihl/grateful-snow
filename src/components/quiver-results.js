import React from 'react';
import { connect } from 'react-redux';
import { getQuiverReport } from '../actions/get-quiver-reports';

class QuiverResults extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.skiAreas.length !== this.props.skiAreas.length){
            this.props.dispatch(getQuiverReport(this.props.skiAreas))
        }
    }
    
    renderResults(){
        let errorMessage;
        let loadingMessage;
        let reportElements;
        if (this.props.loading) {
            loadingMessage = <h3>Loading your ski areas...</h3>
        }
        if (this.props.error) {
            errorMessage = <h3>couldnt find any reports</h3>
        }
        if (this.props.quiverReports[0] !== undefined) {
            reportElements = this.props.quiverReports[0].map(report => 
                    <div className="report-element"
                         id={report.data.request[0].query}
                         key={report.data.nearest_area[0].areaName[0].value}>
                    <h3>{report.data.nearest_area[0].areaName[0].value}</h3>
                    <ul>
                        <li>Total Snowfall: {report.data.weather[0].totalSnowfall_cm}</li>
                        <li>Chance of Snow: {report.data.weather[0].chanceofsnow}%</li>
                        <li>Low Elevation High: {report.data.weather[0].bottom[0].maxtempF}F</li>
                        <li>Mid Elevation High: {report.data.weather[0].mid[0].maxtempF}F</li>
                        <li>High Elevation High: {report.data.weather[0].top[0].maxtempF}F</li>
                        <li>POOP</li>
                    </ul>
                </div>   
           )
        }

        return (
            <div className="quiver-results">
                {loadingMessage}
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
    error: state.report.quiverError,
    loading: state.report.quiverLoading,
    quiverReports: state.report.quiverReports,
    skiAreas: state.report.skiAreas
})

export default connect(mapStateToProps)(QuiverResults);

