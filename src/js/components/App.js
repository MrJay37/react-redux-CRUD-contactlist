import React  from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../containers/home'
import Edit from '../containers/edit'
import Profile from '../containers/profile'
import SignUp from '../containers/signup'
import NavbarBS from '../containers/navbar'
import {Container} from 'react-bootstrap'

class App extends React.Component {

  render(){
    return (
        <Router>
        <NavbarBS />
        <Container fluid="md">
        <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/edit" component={Edit}/>
          </Switch>
        </Container></Router>
    );
  }
}

export default App;
