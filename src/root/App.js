import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Header from '../components/common/header'
import Body from '../containers/body';
import NewRoute from '../containers/newRoute';

class App extends React.Component {
  render(){
    return (
      <div>
        {/* <Header /> 
        <Body/> */}
        <Router history={this.props.history}>
            <Switch>
              <Route path="/newRoute" exact={true} component={NewRoute} history={this.props.history} />
              <Route path="/" exact={true} component={Body} history={this.props.history} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;



{/* <div>
<nav>
  <ul>
    <li>
      <Link to="/">body Route</Link>
    </li>
    <li>
      <Link to="/newRoute">New Route</Link>
    </li>
  </ul>
</nav> */}
