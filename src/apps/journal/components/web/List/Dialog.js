import React from 'react'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography'
import Dialog from 'apps/toolkit/components/web/Dialog'
import { withStyles } from 'material-ui/styles';

class EntryDialog extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const entry = this.props.entry
        return (
            <Dialog
                fullScreen
                open={this.props.open}
                onRequestClose={this.handleRequestClose} >
                <AppBar>
                    <Toolbar>
                      <IconButton color="contrast" onClick={this.props.onRequestClose} aria-label="Close">
                        <Icon>close</Icon>
                      </IconButton>
                      {entry.name}
                    </Toolbar>
                </AppBar>
                <Typography component="p">
                {entry.content}
                </Typography>
            </Dialog>
        )
    }
}

export const styles = theme => ({
  dialog: {

  },
  content: {
    paddingTop: 20,
    paddingLeft: 50,
    marginBottom: 20,
  },
});

export default withStyles(styles)(EntryDialog)
