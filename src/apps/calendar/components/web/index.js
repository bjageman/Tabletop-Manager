import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

import Read from './Read/'
import Search from './Read/Search'
import Create from './Create/'


import data from 'mocks/campaign.json'

class CampaignCalendar extends Component {
  render() {
    const classes = this.props.classes
    const campaign = data[0]
    const calendar = campaign.calendar
    return (
      <div className={classes.container} >
      <Grid container>
        <Grid item xs={12} >
            <Search />
        </Grid>
        <Grid item md={2}>
          <Create />
        </Grid>
        <Grid item md={8}>
          {calendar.map((event, i) => (
            <div class = "campaign-event">
                <Read
                    key = {i}
                    event = {event}
                    />
                <Divider />
            </div>
          ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styleSheet = createStyleSheet('CampaignCalendar', {
  container:{
      marginTop: "1%",
      marginBottom: "1%",
      marginLeft:"5%",
      marginRight: "5%"
  },
});

export default withStyles(styleSheet)(CampaignCalendar);
