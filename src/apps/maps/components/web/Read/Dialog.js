import React from 'react'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography'
import Dialog, {DialogTitle, DialogContent} from 'material-ui/Dialog'
import { createStyleSheet, withStyles } from 'material-ui/styles';

class CampaignMapDialog extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const map = this.props.map
        const classes = this.props.classes
        return (
            <Dialog
                className={classes.dialog}
                open={this.props.open}
                onRequestClose={this.handleRequestClose} >
                <DialogContent className={classes.content}>
                    <img className={classes.map} src={map.image} alt={map.name} />
                </DialogContent>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('CampaignMapDialog', () => ({
  dialog: {
      width: "100%"
  },
  map: {
      width: "100%"
  },
  content: {
    paddingTop: 20,
    paddingLeft: 50,
    marginBottom: 20,
  },
}));

export default withStyles(styleSheet)(CampaignMapDialog)
