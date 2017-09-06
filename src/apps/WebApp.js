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

import Notifications from 'apps/toolkit/components/web/notifications/'
import ToolBar from 'apps/base/components/web/ToolBar'

const NotFound = () => (
    <p>Sorry, not Found!</p>
)


class WebApp extends Component {
    constructor(props){
        super(props)
        this.state = { sidebar: false }
    }

    render() {
    const sidebar = this.state.sidebar
    return (
      <ConnectedRouter history={history}>
          <div className="app" style={sidebar ? styles.sidebar: styles.full}>
              <ToolBar sidebar={sidebar} toggleSidebar={() => this.setState({sidebar: !sidebar})} />
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
    )
  }
}

const styles = {
    full: {
        minHeight: "300px",
        transition: "0.5s",
        margin: 0
    },
    sidebar: {
        minHeight: "300px",
        transition: "margin-left .5s",
        marginLeft: "250px"
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(WebApp);
