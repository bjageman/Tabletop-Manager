import React from 'react'

import TopBar from './TopBar'
import SideBar from './SideBar'

import styles from './styles/navigation.css'

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
        return(
            <div className={styles.root}>
            <TopBar toggleSideBar={this.toggleSideBar} />
            <SideBar open={this.state.sidebar} toggle={this.toggleSideBar} onRequestClose={this.toggleSideBar}/>
            </div>
        )
    }
}

export default Navigation
