import React, { Component } from 'react';
import { GridList, GridListTile } from 'material-ui/GridList';
import { withStyles } from 'material-ui/styles';

import dmScreen from './img/dmscreen.jpg'

export const styles = theme => ({
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
});

class Jumbotron extends Component {
    render(){
        return(
        <GridList cellHeight={160} cols={3}>
              <GridListTile key={1} cols={1}>
                <img src="http://s3images.coroflot.com/user_files/individual_files/original_328353_716xm30Yu9jZsTHSqrUxFIPkU.jpg" alt="waterdeep" />
              </GridListTile>
          </GridList>
        )
    }
}

export default withStyles(styles)(Jumbotron)
