import React from 'react';
const API_BASE_URL = "http://api.worldweatheronline.com/premium/v1/ski.ashx?key=3cfb71ee64f2468ca7c211859182408&";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            report: null,
            error: null,
            loading: false
        };
    }

    loadReport(city) {
        this.setState({
            error: null,
            loading: true
        });
        return fetch(`${API_BASE_URL}q=${city}&format=json&includeLocation=yes`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(report => {
                // console.log(report.data.weather[0]);
                this.setState({
                    report: report.data,
                    loading: false
                })
            })
            .catch(err =>
                this.setState({
                    error: "couldnt find snow report",
                    loading: false
                })
            );
    }

    handleSubmit(e) {
        e.preventDefault();
        let searchCity = e.target.city.value;
        let searchState = e.target.state.value;
        searchCity = searchCity.split(' ').join('+');
        console.log(searchCity);
        console.log(searchState);
        this.loadReport(`${searchCity},${searchState}`);
    }
    componentDidUpdate() {
        console.log(this.state.report)
        // console.log(this.state.reports)
    }

    render() {
        let loadMessage;
        let errorMessage;
        let reportElement;
        if (this.state.loading === true) {
            loadMessage = <h3>loading.....</h3>
        }
        if (this.state.error) {
            errorMessage = <h3>{this.state.error}</h3>
        }
        if (this.state.report) {
            let report = this.state.report;
            reportElement = 
                        <div className="report=element">
                            <h3>{report.nearest_area[0].areaName[0].value}</h3>
                            <ul>
                                <li>Total Snowfall: {report.weather[0].totalSnowfall_cm}</li>
                                <li>Chance of Snow: {report.weather[0].chanceofsnow}%</li>
                                <li>Low Elevation High: {report.weather[0].bottom[0].maxtempF}F</li>
                                <li>Mid Elevation High: {report.weather[0].mid[0].maxtempF}F</li>
                                <li>High Elevation High: {report.weather[0].top[0].maxtempF}F</li>
                                <li></li>
                            </ul>
                        </div>

        }

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
                {loadMessage}
                {errorMessage}
                {reportElement}
            </div>
        );
    }
}

export default SearchBar;
