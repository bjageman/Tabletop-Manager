import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//Material-UI
import { withStyles } from 'material-ui/styles';

import CampaignSideBar from 'apps/campaign/components/web/toolbar/SideBar'
import UserCard from 'apps/user/components/web/UserCard'
import InvisibleLink from 'apps/toolkit/components/web/links/InvisibleLink'
import Login from 'apps/user/components/web/login/index'
import AccountMenu from 'apps/user/components/web/tools/AccountMenu'

import MdMenu from 'react-icons/lib/md/menu';
import AppBar, {AppBarItem} from 'apps/toolkit/components/web/navigation/AppBar'
import { MenuItem } from 'apps/toolkit/components/web/Menu'
import SideNav from 'apps/toolkit/components/web/navigation/SideNav'

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
                    <MdMenu /> { campaign ? campaign.name : brandName }
                </AppBarItem>
                { user ? <AccountMenu  /> : <Login color="contrast"/> }
            </AppBar>
            <SideNav
                open={this.props.sidebar}
                onRequestClose={this.props.toggleSidebar} >
                <UserCard />
                <InvisibleLink to="/"><MenuItem>Home</MenuItem></InvisibleLink>
                <InvisibleLink to="/campaign"><MenuItem>My Campaigns</MenuItem></InvisibleLink>
                { campaign ?
                    <div>
                        <hr />
                        <CampaignSideBar />
                    </div>
                : null
                }
            </SideNav>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ToolBar);
