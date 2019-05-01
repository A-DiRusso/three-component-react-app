import React from 'react';
import './App.css';
import SteveMartin from './SteveMartin';
import ChevyChase from './ChevyChase';
import MartinShort from './MartinShort';
import Home from './Home';
import PageNotFound from './PageNotFound';
import { 
  Route,
  Link,
  Switch
 } from 'react-router-dom';

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
          <Link activeClassName='active' to="/">Home</Link>
          <Link activeClassName='active' to="/luckyday">Lucky Day</Link> 
          <Link activeClassName='active' to="/dustybottoms">Dusty Bottoms</Link>
          <Link activeClassName='active' to="/nednederlander">Ned Nederlander</Link>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/luckyday" component={SteveMartin} />
          <Route path="/dustybottoms" component={ChevyChase} />
          <Route path="/nednederlander" component={MartinShort} />
          <Route component={PageNotFound} />
         </Switch>   
        </header>
      </div>
    );
  }
}



export default App;
