import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

class CampaignMapCard extends Component {
  render() {
    const {classes, map, key, ...other} = this.props
    return (
        <Card key={this.props.key} className={classes.mapContainer}>
            <Typography type="body1" className={classes.title}>
            {map.name}
          </Typography>
            <CardMedia >
              <img className={classes.map} src={map.image} alt={map.name} />
            </CardMedia>
        </Card>
    );
  }
}

export const styles = theme => ({  mapContainer:{
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
    width: "100%",
    maxHeight: 200,
  },
});

export default withStyles(styles)(CampaignMapCard);
