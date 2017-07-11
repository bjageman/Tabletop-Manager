import React from 'react'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';

import UserCard from 'apps/user/components/web/UserCard'
import InvisibleLink from 'apps/toolkit/InvisibleLink'

class SideBar extends React.Component {

    render(){
        return(
        <Drawer
          open={this.props.open}
          onClick={this.props.onRequestClose}
          onRequestClose={this.props.onRequestClose}
          >
          <UserCard />
          <InvisibleLink to="/"><MenuItem>Home</MenuItem></InvisibleLink>
          <InvisibleLink to="/blog"><MenuItem>Blog</MenuItem></InvisibleLink>
          <InvisibleLink to="/campaign"><MenuItem>My Campaign</MenuItem></InvisibleLink>
        </Drawer>
        )
    }
}

export default SideBar
