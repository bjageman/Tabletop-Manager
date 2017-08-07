import React from 'react'

import Typography from 'material-ui/Typography'
import Dialog, {DialogTitle, DialogContent} from 'material-ui/Dialog'
import { createStyleSheet, withStyles } from 'material-ui/styles';

const styleSheet = createStyleSheet('EntryDialog', () => ({
  dialog: {

  },
  content: {
    paddingTop: 20,
    paddingLeft: 50,
    marginBottom: 20,
  },
}));

class EntryDialog extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const entry = this.props.entry
        const classes = this.props.classes
        return (
            <Dialog
                className={classes.dialog}
                open={this.props.open}
                onRequestClose={this.handleRequestClose}
                onBackdropClick={this.handleRequestClose} >
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

export default withStyles(styleSheet)(EntryDialog)
