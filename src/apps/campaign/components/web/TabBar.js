import React from 'react'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

class CampaignTabBar extends React.Component {
    render(){
        return(
            <AppBar position="static">
              <Tabs
                  index={this.props.index}
                  onChange={this.props.handleTabChange}
                  scrollable
                  scrollButtons="on"
                  >
                <Tab label="Home" />
                <Tab label="Journal" />
                <Tab label="Characters" />
                <Tab label="Wiki" />
                <Tab label="Maps" />
                <Tab label="Calendar" />
              </Tabs>
            </AppBar>
        )
    }
}

export default CampaignTabBar
