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
        // console.log(this.props.skiAreas)
        let skiAreaElements;
        if(this.props.skiAreas !== []){
            skiAreaElements = this.props.skiAreas.map(skiArea => (
                <div className="skiArea-element" key={skiArea} id={skiArea}>
                    <h3>{skiArea}</h3>
                    <button className="remove-from-quiver"
                            onClick={e => this.handleRemoveFromQuiver(e)}
                    >Remove from Quiver</button>
                </div>
            ))
        }

        return (
            <div className="quiver">
                <h2>Your Ski Area Quiver</h2>
                {skiAreaElements}
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