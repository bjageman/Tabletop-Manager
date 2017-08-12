import React from 'react'

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Delete from '../Delete/'

const styleSheet = createStyleSheet('CampaignEvent', {
  card: {
    width:"100%",
    marginTop: 20,
    marginBottom: 20,
    marginLeft:20,
    marginRight: 40,
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    maxHeight: 300,
    maxWidth: 150,
  },
});


class CampaignEvent extends React.Component {

    handleClick(event){
        event.preventDefault()
        console.log("Clicked!")
    }

    render(){
        const event = this.props.event
        const classes = this.props.classes
        return(
            <Grid className={classes.card} container gutter={24}>
                    <Grid item md={4} >
                        <Typography type="subheading" color="secondary">
                          {event.start_time} -
                        </Typography>
                        <Typography type="subheading" color="secondary">
                          {event.end_time}
                        </Typography>
                        <Delete />
                    </Grid>
                    <Grid item md={6} >
                        <Typography type="headline">{event.name}</Typography>
                    </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(CampaignEvent)
