import React from 'react';
import TflHeader from '../components/TflHeader';
import Axios from 'axios';
import '../styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tflLines: []
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
    return (
      <div>
        <TflHeader />
      </div>
    );
  }
}

export default App;
