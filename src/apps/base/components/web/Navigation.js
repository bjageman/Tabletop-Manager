import React from 'react'
import { withStyles, createStyleSheet } from 'material-ui/styles';

import TopBar from './TopBar'
import SideBar from './SideBar'

class Navigation extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sidebar: false,
        }
        this.toggleSideBar = this.toggleSideBar.bind(this)
    }

    toggleSideBar(){
        console.log("TOGGLE")
        this.setState({sidebar: !this.state.sidebar})
    }

    render(){
        const { classes, ...other } = this.props
        return(
            <div className={classes.root}>
            <TopBar toggleSideBar={this.toggleSideBar} />
            <SideBar open={this.state.sidebar} toggle={this.toggleSideBar} onRequestClose={this.toggleSideBar}/>
            </div>
        )
    }
}

const styleSheet = createStyleSheet('Navigation', {
  root: {
    width: '100%',
    },
  flex: {
    flex: 1,
    },
  title: {
    cursor: 'pointer',
    color: 'white',
    },
  link: {
    textDecoration: 'none',
  }
});

export default withStyles(styleSheet)(Navigation)
