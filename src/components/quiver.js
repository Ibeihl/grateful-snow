import React from 'react';
import { connect } from 'react-redux';
import { getQuiver, addSkiArea } from '../actions/quiver';
import QuiverResults from './quiver-results';
import './quiver.css';

export class Quiver extends React.Component {
    componentDidMount(){
        this.props.dispatch(getQuiver());
    }

    handleRemoveFromQuiver(e) {
        console.log(e.target.parentElement.id);
        let skiAreaReq = {
            skiArea: e.target.parentElement.id,
            action: "remove"
        };
        this.props.dispatch(addSkiArea(skiAreaReq))
    }
    
    render() {
        return (
            <div className="quiver">
                <h2>Your Snow Reports</h2>
                <QuiverResults/>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentUser: state.auth.currentUser.username,
    skiAreas: state.report.skiAreas
});

export default connect(mapStateToProps)(Quiver);