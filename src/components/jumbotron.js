import React from 'react';

export class Jumbotron extends React.Component {

    render() {
        // let styles = {
        //     "background-image": url".../public/images/me-jimbo-pow.jpg"
        // }

        //HOW TO ADD A BACKGROUND IMAGE OF MOUNTAINS OR POW POW
        return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">The Grateful Snow</h1>
                <p className="lead">handpick your favorite ski areas and have all your
                    daily snow reports in one place</p>
            </div>
        </div>
        )
    }
}

export default Jumbotron;