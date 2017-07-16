import React from 'react'
import Dialog, {DialogContent} from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { withStyles, createStyleSheet } from 'material-ui/styles'

import EntryCreateEditor from './Editor'

const styleSheet = createStyleSheet('EntryCreateDialog', {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  editor: {
      backgroundColor: "green",
  }
});

class EntryCreateDialog extends React.Component {
    render(){
        const classes = this.props.classes;
        const title = this.props.title || "Create Entry"
        return(
            <Dialog
                fullScreen
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
                transition={<Slide direction="up" />}
            >
            <AppBar className={classes.appBar}>
                <Toolbar>
                  <IconButton color="contrast" onClick={this.props.onRequestClose} aria-label="Close">
                    <Icon>close</Icon>
                  </IconButton>
                  <Typography type="title" color="inherit" className={classes.flex}>
                    {title}
                  </Typography>
                  <Button color="contrast" onClick={this.props.onRequestClose}>
                    save
                  </Button>
                </Toolbar>
            </AppBar>
            <DialogContent className={classes.editor}>
                <EntryCreateEditor />
            </DialogContent>
            </Dialog>
        )
    }
}

export default withStyles(styleSheet)(EntryCreateDialog)
