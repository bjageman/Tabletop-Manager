import React from 'react'

import { withStyles, createStyleSheet } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { blue } from 'material-ui/colors';

import CreateMenu from './buttons/CreateMenu'
import Login from 'apps/user/components/web/login/index'

class TopBar extends React.Component {
    render(){
        const brandName = "RPG Manager"
        const classes = this.props.classes
        const user = null
        //const user = data[0].owner
        return(
            <AppBar className={classes.topbar} position="static">
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


const styleSheet = createStyleSheet('TopBar', {
  topbar: {
      backgroundColor:blue[500],
  },
  flex: {
    flex: 1,
  },
});

export default withStyles(styleSheet)(TopBar)
