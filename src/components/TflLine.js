import React from 'react';
import "../styles/TflLine.css";

class TflLine extends React.Component {

    render() {
        let { name, color, status, reason, timestamp } = this.props;
        
        return (
            // Each Tfl line is represented by a BS4 card
            <div className="card">
                <div className="card-header" style={ color }><h3>{ name }</h3></div>
                <div className="card-body">
                    <h5>{ status }</h5>
                    {/* If the status reason exists, display it */}
                    {reason && <p>{ reason }</p>}
                </div> 
                <div className="card-footer">{ timestamp ? <h6>Last Updated: {(new Date(timestamp.fromDate).getHours()).toString().padStart(2, '0')}:{(new Date(timestamp.fromDate).getMinutes()).toString().padStart(2, '0')}</h6> : <br />}</div>
            </div>
        );
    }
}

export default TflLine;