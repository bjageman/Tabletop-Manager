import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//Material-UI
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button'
import { blue } from 'material-ui/colors';

import Login from 'apps/user/components/web/login/index'
import Tools from 'apps/user/components/web/tools/'
import HomeButton from './buttons/Home'

import CampaignTabs from 'apps/campaign/components/web/toolbar/Tabs'

import myConfig from 'config.js';

class ToolBar extends React.Component {
    render(){
        const brandName = "RPG Manager"
        const classes = this.props.classes
        const user = this.props.user
        return(
            <AppBar className={classes.topbar} position="static">
                <Toolbar>
                  <HomeButton tabs={this.props.tabs} name={brandName}  />
                  { this.props.tabs ? <CampaignTabs /> : null }
                  { user ? <Tools /> : <Login color="contrast"/> }
                </Toolbar>
            </AppBar>
        )
    }
}


export const styles = theme => ({
  topbar: {
      backgroundColor:blue[500],
  },
  flex: {
    flex: 1,
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ToolBar));
