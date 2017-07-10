import React from 'react'

import AppBar from 'material-ui/AppBar';

import { Link } from 'react-router-dom'

import SideBar from './SideBar'

const styles = {
  title: {
    cursor: 'pointer',
    color: 'white',
    },
  link: {
    textDecoration: 'none',
},
};

class TopAppBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sidebar: false,
        }
        this.toggleSideBar = this.toggleSideBar.bind(this)
    }

    toggleSideBar(){
        this.setState({sidebar: !this.state.sidebar})
    }

    render(){
        const brandName = "RPG Manager"
        return(
            <div>
            <AppBar
                title={<Link style={styles.link} to="/"><span style={styles.title}>{brandName}</span></Link>}
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.toggleSideBar}
                />
            <SideBar open={this.state.sidebar} toggle={this.toggleSideBar} onRequestChange={this.toggleSideBar}/>
            </div>
        )
    }
}

export default TopAppBar
