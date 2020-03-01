import React from 'react';
import "../styles/TflLine.css";

class TflLine extends React.Component {
    render() {
        let { name, color, status, reason } = this.props;
        return (
            // Each Tfl line is represented by a BS4 card
            <div class="card">
                <div class="card-header" style={ color }><h3>{ name }</h3></div>
                <div class="card-body">
                    <h5>{ status }</h5>
                    {/* If the status reason exists, display it */}
                    {reason ? <p>{ reason }</p> : <p>{ name } Line is experiencing a good service today. Have a nice day :)</p>}
                </div> 
                <div class="card-footer"><br /></div>
            </div>
        );
    }
}

export default TflLine;