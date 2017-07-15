import React from 'react'

import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';


class CreateMenu extends React.Component {
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
            <Button fab color="accent"  onClick={this.handleClick}>
                <Icon>add</Icon>
            </Button>
            <Menu
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                >
                <MenuItem>Works!</MenuItem>
            </Menu>
            </div>
        )
    }
}

export default CreateMenu
