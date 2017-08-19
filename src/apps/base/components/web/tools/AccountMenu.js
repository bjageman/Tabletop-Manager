import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Divider from 'material-ui/Divider';

import InvisibleLink from 'apps/toolkit/InvisibleLink'

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
        this.props.logOutCampaign()
        this.setState({ open: false });
    };

    render() {
        return(
            <div>
            <Button color="contrast"  onClick={this.handleClick}>
                {this.props.username} <Icon>keyboard_arrow_down</Icon>
            </Button>
            <Menu
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                >
                <InvisibleLink to="/profile">
                <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                </InvisibleLink>
                <InvisibleLink to="/campaign">
                    <MenuItem onClick={this.handleRequestClose}>My Campaign</MenuItem>
                </InvisibleLink>
                <InvisibleLink to="/settings">
                <MenuItem onClick={this.handleRequestClose}>Settings</MenuItem>
                </InvisibleLink>
                <Divider />
                <MenuItem onClick={this.handleLogOut}>Log Out</MenuItem>
            </Menu>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountMenu)
