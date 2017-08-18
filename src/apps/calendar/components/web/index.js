import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Divider from 'material-ui/Divider';

import Read from './Read/'
import Search from './Read/Search'
import Create from './Create/'

class CampaignCalendar extends Component {
  render() {
    const classes = this.props.classes
    const calendar = this.props.calendar
    return (
      <div className={classes.container} >
      <Grid>
        <Grid item xs={12} >
            <Search />
        </Grid>
        <Grid item md={2}>
          { this.props.is_owner ? <Create /> : null }
        </Grid>
        <Grid item md={8}>
          {calendar.map((event, i) => (
            <div key = {event.id} className = "campaign-event">
                <Read event = {event} />
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
