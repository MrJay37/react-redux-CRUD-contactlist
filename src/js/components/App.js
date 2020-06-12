import React  from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from '../containers/home'
import Edit from '../containers/edit'
import Login from '../containers/login'
import SignUp from '../containers/signup'
import NavbarBS from '../containers/navbar'
import {Container} from 'react-bootstrap'

class App extends React.Component {

  render(){
    return (<>
        <NavbarBS />
        <Container fluid="md">
        <br />
        <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/edit" component={Edit}/>
        </Switch>
        </Router></Container></>
    );
  }
}

export default App;
