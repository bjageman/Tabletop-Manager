import React from 'react'

import Dialog, {DialogContent} from 'material-ui/Dialog'
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
