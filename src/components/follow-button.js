import React from 'react';
import {connect} from 'react-redux';
import { addSkiArea } from '../actions/quiver';

class FollowButton extends React.Component {
    handleFollow(e) {
        let skiAreaReq = {
            "skiArea": e.target.parentElement.id,
            "action": "add",
            "title": e.target.id
        };
        this.props.dispatch(addSkiArea(skiAreaReq))
    }
  
    render() {
    return (
        <button id={this.props.id} 
                onClick={(e) => this.handleFollow(e)}
                className="btn btn-outline-secondary btn-lg btn-block">
                Follow this ski area!!</button>
    );
  }
}

const mapStateToProps = state => ({
    report: state.report.searchReport
})

export default connect(mapStateToProps)(FollowButton);