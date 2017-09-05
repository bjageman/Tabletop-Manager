import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//Material-UI
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import { blue } from 'material-ui/colors';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography'

import CampaignSideBar from 'apps/campaign/components/web/toolbar/SideBar'
import UserCard from 'apps/user/components/web/UserCard'
import InvisibleLink from 'apps/toolkit/links/InvisibleLink'
import Login from 'apps/user/components/web/login/index'
import AccountMenu from 'apps/user/components/web/tools/AccountMenu'

import AppBar, {AppBarItem} from 'apps/toolkit/components/web/navigation/AppBar'
import Menu, { MenuItem } from 'apps/toolkit/components/web/Menu'

class ToolBar extends React.Component {
    constructor(props){
        super(props)
        this.state = { open: false };
    }

    onRequestClose() {
        this.setState({ open: false })
    }

    toggleDrawer = () => {
        console.log("DRAWER")
        this.setState({ open: !this.state.open });
    };

    render(){
        const brandName = "RPG Manager"
        const classes = this.props.classes
        const user = this.props.user
        const campaign = this.props.campaign
        return(
            <div>
            <AppBar>
                <AppBarItem onClick={() => this.toggleDrawer()} >
                    { campaign ? campaign.name : brandName }
                </AppBarItem>
                { user ? <AccountMenu  /> : <Login color="contrast"/> }
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
