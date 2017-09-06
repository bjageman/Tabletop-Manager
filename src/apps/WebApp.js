import React, { Component } from 'react';
import { Route, Switch } from 'react-router'

import { ConnectedRouter } from 'react-router-redux'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
import { history } from 'redux/store'

import Footer from './base/components/web/Footer'

import UserProfile from './user/components/web/profile/'

import LandingPage from './landing/components/web/'
import Campaign from './campaign/components/web/'
import CampaignListing from './campaign/components/web/listing/'
import Maps from './maps/components/web/'

import Notifications from './toolkit/notifications/'

const NotFound = () => (
    <p>Sorry, not Found!</p>
)


class WebApp extends Component {
  render() {

    return (
      <ConnectedRouter history={history}>
        <div className="app">
          <Notifications />
          <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route exact path="/profile/:userId" component={UserProfile}/>
          <Route exact path="/campaign" component={CampaignListing}/>
          <Route path="/campaign/:id" component={Campaign}/>
          <Route path="/maps" component={Maps}/>
          <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </ConnectedRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(WebApp);
