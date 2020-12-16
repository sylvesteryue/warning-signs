import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"

import logo from './logo.svg';
import './App.css';

import Game from './containers/Game';
import Home from './containers/Home';
import Room from './containers/Room';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/room" component={Room}/>
        <Route path="/game" component={Game}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
