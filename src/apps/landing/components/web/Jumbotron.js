import React, { Component } from 'react';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { withStyles, createStyleSheet } from 'material-ui/styles';

import dmScreen from './img/dmscreen.jpg'

const styleSheet = createStyleSheet('Jumbotron', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  headline: {
    paddingBottom: 20,
    textAlign: 'center',
    backgroundImage: 'url(' + dmScreen + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
    height: 300,
  },
  headlineText: {
      paddingTop: "5%",
      paddingBottom: "1%",
      color: "white",
      fontSize: 48
  },
  subHeadlineText: {
      color: "white",

  }
}));

class Jumbotron extends Component {
    render(){
        const { title, subtitle, classes } = this.props
        return(
        <Grid>
            <Grid item xs={12} className={classes.headline}>
                <Typography type="headline" className={classes.headlineText}>
                    {title}
                </Typography>
                <Typography type="subheading" className={classes.subHeadlineText}>
                    {subtitle}
                </Typography>
            </Grid>
        </Grid>
        )
    }
}

export default withStyles(styleSheet)(Jumbotron)
