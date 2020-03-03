import React from 'react';
import TflHeader from '../components/TflHeader';
import TflLine from '../components/TflLine';
import Axios from 'axios';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Stores each tfl line
      tflLines: [],
      // Distinct colour of each line
      tflLineColour: { bakerloo: '#a52a2a', central: '#ff0000', circle: '#ffff00', district: '#008000', dlr: '#20B2AA', "hammersmith-city": "#DB7093", jubilee: "#A9A9A9", 
      "london-overground": "#FF8C00",  metropolitan: "#800080", northern: "#000000", piccadilly: "#00008B", tram: "#7FFF00", victoria: "#00CED1", "waterloo-city": "#87CEFA" },
    }
  }

  // Getting all Tfl service lines and their line statuses
  componentDidMount() {
    const appId = process.env.REACT_APP_ID;
    const appKey = process.env.REACT_APP_KEY;
    Axios.get(`https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground%2Ctram/Status?app_id=${appId}&app_key=${appKey}`)
    .then(res => {
      this.setState({ tflLines: res.data });
    }).catch(err => console.log(err));
  }

  render() {
    // Deconstructing state
    let { tflLines, tflLineColour } = this.state;

    return (
      <div>
        <TflHeader />
        <div className="flex-container">
        {tflLines.map(line => {
          // Color of tfl service line
          let color = { backgroundColor: tflLineColour[line.id] }
          return (
            <TflLine 
              name={line.name} 
              color={color} 
              status={line.lineStatuses[0]["statusSeverityDescription"]}
              reason={line.lineStatuses[0]["reason"]} />
            );
        })}
        </div>
      </div>
    );
  }
}

export default App;
