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

import Notifications from 'apps/base/components/web/notifications/'
import ToolBar from 'apps/base/components/web/ToolBar'
import { NotFound }from 'apps/base/components/web/Error'

class WebApp extends Component {
    render() {
    return (
      <ConnectedRouter history={history}>
          <div>
          <div className="app" style={styles.full}>
            <ToolBar />
            <Notifications />
            <div style={styles.body}>
                <Switch>
                  <Route exact path="/" component={LandingPage}/>
                  <Route exact path="/profile" component={UserProfile}/>
                  <Route exact path="/profile/:userId" component={UserProfile}/>
                  <Route exact path="/campaigns" component={CampaignListing}/>
                  <Route path="/campaign/:id" component={Campaign}/>
                  <Route path="/maps" component={Maps}/>
                  <Route component={NotFound} />
                </Switch>
            </div>

          </div>
          <Footer />
          </div>
      </ConnectedRouter>
    )
  }
}

const styles = {
    full: {
        minHeight: "600px",
        transition: "0.5s",
        margin: 0
    },
    body: {
        padding: "1% 1% 1% 2%"
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(WebApp);
