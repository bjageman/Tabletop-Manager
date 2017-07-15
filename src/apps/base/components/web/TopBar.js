import React from 'react'

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

import CreateMenu from './buttons/CreateMenu'
import Login from 'apps/user/components/web/login/index'

import styleSheet from './styles/topbar'

class TopBar extends React.Component {
    render(){
        const brandName = "RPG Manager"
        const classes = this.props.classes
        const user = null
        //const user = data[0].owner
        return(
            <AppBar position="static">
                <Toolbar>
                  <IconButton color="contrast" aria-label="Menu" onTouchTap={this.props.toggleSideBar}>
                      <Icon>dehaze</Icon>
                  </IconButton>
                  <Typography type="title" color="inherit" className={classes.flex}>
                    {brandName}
                  </Typography>

                  {
                  user != null ?
                      <CreateMenu />
                  :
                  <Login color="contrast"/>
                  }
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styleSheet)(TopBar)
