import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//material-ui
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles';

import CampaignSideBar from 'apps/campaign/components/web/toolbar/SideBar'
import UserCard from 'apps/user/components/web/UserCard'
import InvisibleLink from 'apps/toolkit/links/InvisibleLink'
import Login from 'apps/user/components/web/login/index'
import Tools from 'apps/user/components/web/tools/'

class SideBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                open: false,
          };

    }

    onRequestClose() {
        this.setState({
            open: false
        })
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    render(){
        const classes = this.props.classes
        const campaign = this.props.campaign
        return(
        <div>
            <IconButton onClick={() => this.toggleDrawer()}><Icon color="contrast">menu</Icon></IconButton>
            <Typography type="title" color="contrast" style={{flex:1}}>
                {this.props.campaign.name}
            </Typography>
            {this.props.children}
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
    flex: {
      flex: 1,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SideBar));
