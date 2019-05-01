import React from 'react';
import './App.css';
import SteveMartin from './SteveMartin';
import ChevyChase from './ChevyChase';
import MartinShort from './MartinShort';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SteveMartin />
          <ChevyChase />
          <MartinShort />
        </header>
      </div>
    );
  }
}



export default App;
