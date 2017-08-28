import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { GridListTile, GridListTileBar } from 'material-ui/GridList';

import Dialog from './Dialog'
import Delete from '../Delete/'

class CampaignMapCard extends Component {
  constructor(props){
      super(props)
      this.handleRequestClose = this.handleRequestClose.bind(this)
      this.state = {
          open: false,
      }
  }
  handleRequestClose(){
      this.setState({open: false})
  }

  render() {
    const {classes, map } = this.props
    return (
        <div>
        <GridListTile key={this.props.key} className={classes.container}>
            <img onClick={() => this.setState({ open: true })} className={classes.map} src={map.image.url} alt={map.name} />
            <GridListTileBar
                className={classes.tilebar}
                title={map.name}
                actionIcon={
                <Delete map={map} />
              }
                />
        </GridListTile>
        <Dialog
            map={map}
            open={this.state.open}
            onRequestClose={this.handleRequestClose} />
        </div>
    );
  }
}

export const styles = theme => ({
    container:{
    maxWidth:500,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  tilebar: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
  },
  map: {
    maxWidth: "100%",
    cursor: "pointer"
  },
});

export default withStyles(styles)(CampaignMapCard);
