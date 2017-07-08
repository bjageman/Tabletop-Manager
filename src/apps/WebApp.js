import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux/utils'

import NavBar from './base/components/web/NavBar'
import Footer from './base/components/web/Footer'

import LandingPage from './landing/components/web/index'
import Blog from './blog/components/web/index'
import Entry from './blog/components/web/entries/index'
import Forum from './forum/components/web/index'
import Maps from './maps/components/web/index'

const NotFound = () => (
    <p>Sorry, not Found!</p>
)


class WebApp extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
              <Route exact path="/" component={LandingPage}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/forum" component={Forum}/>
              <Route path="/maps" component={Maps}/>
              <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WebApp);
