import React from 'react'

import Typography from 'material-ui/Typography'
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';

class EntryDrawer extends React.Component {
    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const entry = this.props.entry
        const classes = this.props.classes
        return (
            <Drawer
                anchor="right"
                className={classes.drawer}
                open={this.props.open}
                onRequestClose={this.handleRequestClose} >
                {entry.name}
            </Drawer>
        )
    }
}

export const styles = theme => ({
  drawer: {
      width:"200",
  },
  content: {
    paddingTop: 20,
    paddingLeft: 50,
    marginBottom: 20,
  },
});

export default withStyles(styles)(EntryDrawer)
