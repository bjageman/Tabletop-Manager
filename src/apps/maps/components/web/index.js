import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import Read from './Read/.'
import Create from './Create/'


class CampaignMaps extends Component {
  render() {
    const classes = this.props.classes
    const maps = this.props.maps
    return (
      <Grid container className={classes.container} >
          <Create />
          {maps.map((map, i) => (
            <Read
                key = {i}
                map = {map}
                />
          ))}

      </Grid>
    );
  }
}

const styleSheet = createStyleSheet('CampaignMaps', {
  container:{
      marginTop: "1%",
      marginBottom: "1%",
      marginLeft:"5%",
      marginRight: "5%"
  },
});

export default withStyles(styleSheet)(CampaignMaps);
