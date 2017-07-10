import React from 'react'

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';

import { Link } from 'react-router-dom'

const styles = {
  title: {
    cursor: 'pointer',
    color: 'white',
    },
  link: {
    textDecoration: 'none',
},
};

class SideBar extends React.Component {

    render(){
        return(
        <Drawer docked={false} open={this.props.open} onRequestChange={this.props.onRequestChange}>
          <Subheader>Navigation</Subheader>
          <MenuItem><Link to="/">Home</Link></MenuItem>
          <MenuItem><Link to="/blog">Blog</Link></MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        )
    }
}

export default SideBar
