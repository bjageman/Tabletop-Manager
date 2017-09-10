import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import CampaignSideBar from 'apps/campaign/components/web/toolbar/SideBar'
import InvisibleLink from 'apps/toolkit/components/web/links/InvisibleLink'
import Login from 'apps/user/components/web/login/index'
import AccountMenu from 'apps/user/components/web/tools/AccountMenu'

import Icon from 'apps/toolkit/components/web/Icon'
import AppBar, {AppBarItem} from 'apps/toolkit/components/web/navigation/AppBar'
import { MenuItem } from 'apps/toolkit/components/web/Menu'
import Drawer from 'apps/toolkit/components/web/Drawer'

import MdMenu from 'react-icons/lib/md/menu';
import MdClose from 'react-icons/lib/md/close';

class ToolBar extends React.Component {
    constructor(props){
        super(props)
        this.state = { sidebar: false };
    }

    onRequestClose() {
        this.setState({ sidebar: false })
    }

    toggleDrawer = () => {
        console.log("DRAWER")
        this.setState({ open: !this.state.open });
    };

    render(){
        const brandName = "RPG Manager"
        const user = this.props.user
        const campaign = this.props.campaign
        return(
            <div>
            <AppBar>
                <AppBarItem onClick={this.props.toggleSidebar} >
                    <Icon name="menu" /> { campaign ? campaign.name : brandName }
                </AppBarItem>
                { user ? <AccountMenu  /> : <Login color="contrast"/> }
            </AppBar>
            <Drawer
                open={this.props.sidebar}
                onClick={this.props.toggleSidebar}
                onRequestClose={this.props.toggleSidebar} >
                <InvisibleLink to="/"><MenuItem>Home</MenuItem></InvisibleLink>
                { user ? <InvisibleLink to="/campaign"><MenuItem>My Campaigns</MenuItem></InvisibleLink> : null }
                { campaign ?
                    <div>
                        <hr />
                        <CampaignSideBar />
                    </div>
                : null
                }
            </Drawer>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
