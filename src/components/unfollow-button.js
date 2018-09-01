import React from 'react';
import { connect } from 'react-redux';
import { getQuiver, addSkiArea } from '../actions/quiver';
import {getQuiverReport} from '../actions/get-quiver-reports'
// import QuiverResults from './quiver-results';
import './quiver.css';

export class UnfollowButton extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.skiAreas.length !== this.props.skiAreas.length){
            console.log("new skiAreas props", this.props.skiAreas);
            this.props.dispatch(getQuiver());
            this.props.dispatch(getQuiverReport(this.props.skiAreas))
            //is this getting run or not???????
            //console.log in the action to find out
        }
        if (prevProps.skiAreas.length !== this.props.skiAreas.length){
            this.props.dispatch(getQuiverReport(this.props.skiAreas))
        }
    }

    handleRemoveFromQuiver(e) {
        let skiAreaReq = {
            skiArea: e.target.id,
            action: "remove"
        };
        this.props.dispatch(addSkiArea(skiAreaReq));
    }

    render() {
        return (
            <button 
                    type="button"
                    className="remove-from-quiver btn btn-outline-secondary btn-lg btn-block"
                    onClick={e => this.handleRemoveFromQuiver(e)}
                    id={this.props.id}
            >Remove from Quiver</button>
        )
    }
}


const mapStateToProps = state => ({
    currentUser: state.auth.currentUser.username,
    skiAreas: state.report.skiAreas
});

export default connect(mapStateToProps)(UnfollowButton);