import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'

class CampaignDashboardCalendar extends React.Component {
    render(){
        const classes = this.props.classes
        return(
            <Grid item xs={12} sm={3} >
                <Typography type="display3" align="center" className={classes.title}>
                    Calendar
                </Typography>
            </Grid>
        )
    }
}

export const styles = theme => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignDashboardCalendar));
