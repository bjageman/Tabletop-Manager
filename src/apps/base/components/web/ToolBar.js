import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import CampaignSideBar from 'apps/campaign/components/web/SideBar'
import Login from 'apps/user/components/web/login/index'
import AccountMenu from 'apps/user/components/web/tools/AccountMenu'

import { Drawer, Icon, AppBar, AppBarItem, AppBarButton} from 'bjageman-react-toolkit'

class ToolBar extends React.Component {
    state = { open: false }

    onRequestClose() {
        this.setState({ open: false })
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
                { campaign ?
                <AppBarButton onClick={this.toggleDrawer} >
                    <Icon name="menu" /> {campaign.name}
                </AppBarButton>
                :
                <AppBarItem >
                    { brandName }
                </AppBarItem>
                }
                { user ? <AccountMenu  /> : <Login color="contrast"/> }
            </AppBar>
            <Drawer
                open={this.state.open}
                onClick={this.toggleDrawer}
                onRequestClose={this.toggleDrawer} >
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
