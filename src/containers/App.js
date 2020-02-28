import React from 'react';
import CentralTubeMap from '../components/CentralTubeMap';
import '../styles/App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tfl Live Status Project</h1>
        <div className="flex-container">
          <CentralTubeMap />
        </div>
      </div>
    );
  }
}

export default App;
