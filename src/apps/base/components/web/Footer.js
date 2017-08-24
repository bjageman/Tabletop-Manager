import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

export const styles = theme => ({
  footer: {
    textAlign: 'center',
    height: 100,
    backgroundColor: "gray",
    marginBottom: 0
},
  footerText: {
      paddingTop: "5%",
  }
});

class Footer extends React.Component {
    render(){
        const classes = this.props.classes
        return(
            <Grid className={classes.footer}>
                <Grid item xs>
                    <Typography type="body2">
                        <Icon>copyright</Icon>RPG Manager 2017
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Footer);
