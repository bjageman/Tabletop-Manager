import React, { Component } from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Dialog from './Dialog'

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
        <Card onClick={() => this.setState({ open: true })} key={this.props.key} className={classes.mapContainer}>
            <Typography type="body1" className={classes.title}>
            {map.name}
          </Typography>
            <CardMedia >
              <img className={classes.map} src={map.image} alt={map.name} />
            </CardMedia>
        </Card>
        <Dialog
            map={map}
            open={this.state.open}
            onRequestClose={this.handleRequestClose} />
        </div>
    );
  }
}

const styleSheet = createStyleSheet('CampaignCardMaps', {
  mapContainer:{
      marginTop: 20,
      marginBottom: 20,
      marginLeft:20,
      marginRight: 40
  },
  title: {
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

export default withStyles(styleSheet)(CampaignMapCard);
