import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//Material-UI
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { blue } from 'material-ui/colors';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography'

import SideBar from './SideBar'

import CampaignSideBar from 'apps/campaign/components/web/toolbar/SideBar'
import UserCard from 'apps/user/components/web/UserCard'
import InvisibleLink from 'apps/toolkit/links/InvisibleLink'
import Login from 'apps/user/components/web/login/index'
import Tools from 'apps/user/components/web/tools/'

class ToolBar extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false };
    }

    onRequestClose() {
        this.setState({ open: false })
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    render(){
        const brandName = "RPG Manager"
        const classes = this.props.classes
        const user = this.props.user
        const campaign = this.props.campaign
        return(
            <div>
            <AppBar className={classes.topbar} position="static">
                <Toolbar>
                 <IconButton onClick={() => this.toggleDrawer() }><Icon color="contrast">menu</Icon></IconButton>
                 <Typography type="title" style={{flex:1}}>
                     { campaign ? <Button onClick={() => this.toggleDrawer() } color="contrast">{campaign.name}</Button> : brandName }
                 </Typography>
                      { this.props.user ? <Tools /> : <Login color="contrast"/> }


                </Toolbar>
            </AppBar>
            <Drawer
              open={this.state.open}
              onClick={() => this.onRequestClose()}
              onRequestClose={() => this.onRequestClose()}
              >
              <UserCard />
              <InvisibleLink to="/"><MenuItem>Home</MenuItem></InvisibleLink>
              <InvisibleLink to="/campaign"><MenuItem>My Campaigns</MenuItem></InvisibleLink>
              { campaign ?
                  <div>
                      <Divider />
                      <CampaignSideBar />
                  </div>
              : null
              }
            </Drawer>
            </div>
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
