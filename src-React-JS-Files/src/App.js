import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Quiz from './components/Quiz';
import Home from './Home';
import AddNewCode from './AddNewCode';

class App extends Component {
  render() {
  return (
    <div className="App">
        <Router>
            <Route path='/add' exact={true} component={AddNewCode}/>
            <Route path='/home' exact={true} component={Home}/>
            <Route path='/quiz' exact={true} component={Quiz}/>
            <Route path='/' exact={true} component={Home}/>
        </Router>
    </div>
  );
  } 
}
  
export default App;
