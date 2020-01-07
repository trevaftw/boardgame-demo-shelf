import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'


import Home from '../Home/Home';
import AddGame from '../AddGame/AddGame.js'
import EditShelf from '../EditShelf/EditShelf'

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the Home if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}

            <ProtectedRoute
              exact
              path="/add"
              component={this.props.reduxState.user.admin ? AddGame : Home}
            />
            <ProtectedRoute
              exact
              path="/edit"
              component={this.props.reduxState.user.admin ? EditShelf : Home}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = reduxState => ({
  reduxState
});

export default connect(mapStateToProps)(App);
