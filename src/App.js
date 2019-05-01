import React from 'react';
import './App.css';
import SteveMartin from './SteveMartin';
import ChevyChase from './ChevyChase';
import MartinShort from './MartinShort';
import { Route } from 'react-router-dom';

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
          <Route path="/luckyday" component={SteveMartin} />
          <Route path="/dustybottoms" component={ChevyChase} />
          <Route path="/nednederlander" component={MartinShort} />
        </header>
      </div>
    );
  }
}



export default App;
