import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Menu, { MenuItem } from 'apps/toolkit/components/web/Menu';

import InvisibleLink from 'apps/toolkit/components/web/links/InvisibleLink'

class AccountMenu extends React.Component {
    state = {
        open: false,
        anchorEl: undefined
    }

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    handleLogOut = () => {
        this.props.logout()
        // this.props.logOutCampaign()
        this.setState({ open: false });
    };

    render() {
        return(
            <Menu title={this.props.user.username}>
                <InvisibleLink to="/profile">
                    <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                </InvisibleLink>
                <InvisibleLink to="/campaign">
                    <MenuItem onClick={this.handleRequestClose}>My Campaigns</MenuItem>
                </InvisibleLink>
                <InvisibleLink to="/settings">
                    <MenuItem onClick={this.handleRequestClose}>Settings</MenuItem>
                </InvisibleLink>
                <hr />
                <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
            </Menu>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
