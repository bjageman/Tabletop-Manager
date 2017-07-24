import React from 'react'

import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

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
                <MenuItem onClick={this.handleRequestClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleRequestClose}>My Campaign</MenuItem>
                <MenuItem onClick={this.handleRequestClose}>Settings</MenuItem>
                <Divider />
                <MenuItem onClick={this.handleRequestClose}>Log Out</MenuItem>
            </Menu>
            </div>
        )
    }
}

export default AccountMenu
