import React from 'react'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography'
import Dialog, {DialogTitle, DialogContent} from 'material-ui/Dialog'
import { createStyleSheet, withStyles } from 'material-ui/styles';

class EntryDialog extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const entry = this.props.entry
        const classes = this.props.classes
        return (
            <Dialog
                fullScreen
                className={classes.dialog}
                open={this.props.open}
                onRequestClose={this.handleRequestClose} >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                      <IconButton color="contrast" onClick={this.props.onRequestClose} aria-label="Close">
                        <Icon>close</Icon>
                      </IconButton>
                      {entry.name}
                    </Toolbar>
                </AppBar>
                <DialogTitle>{entry.name}</DialogTitle>
                <DialogContent className={classes.content}>
                    <Typography component="p">
                    {entry.content}
                    </Typography>
                </DialogContent>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('EntryDialog', () => ({
  dialog: {

  },
  content: {
    paddingTop: 20,
    paddingLeft: 50,
    marginBottom: 20,
  },
}));

export default withStyles(styleSheet)(EntryDialog)
