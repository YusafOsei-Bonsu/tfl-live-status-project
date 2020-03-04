import React from 'react';
import TflHeader from '../components/TflHeader';
import TflLine from '../components/TflLine';
import Axios from 'axios';
import '../styles/App.css';

class App extends React.Component {
  intervalID;

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

  // Get the statuses of each Tfl line
  getData = () => {
    const appId = process.env.REACT_APP_ID;
    const appKey = process.env.REACT_APP_KEY;
    Axios.get(`https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground%2Ctram/Status?app_id=${appId}&app_key=${appKey}`)
    .then(res => {
      this.setState({ tflLines: res.data });
      // Every 10secs, refresh the page
      this.intervalID = setTimeout(this.getData.bind(this), 10000);
    }).catch(err => console.log(err));
  }

  // Getting all Tfl service lines and their line statuses
  componentDidMount() {
    this.getData();
  }

  // stop getData() from continuing to run even after unmounting this component.
  componentWillUnmount() {
    clearTimeout(this.intervalID);
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
              key={line.id}
              name={line.name} 
              color={color} 
              status={line.lineStatuses[0]["statusSeverityDescription"]}
              reason={line.lineStatuses[0]["reason"]} 
              timestamp={line.lineStatuses[0]["validityPeriods"][0]} />
            );
        })}
        </div>
      </div>
    );
  }
}

export default App;
