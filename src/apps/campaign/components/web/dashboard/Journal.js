import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

class CampaignDashboardJournal extends React.Component {
    render(){
        const classes = this.props.classes
        const entry = this.props.entry
        return(
            <Grid item xs={12} sm={4} className={classes.container} >
                <CardContent>
                    <Typography type="headline" component="h2">
                        Latest Entry
                    </Typography>
                    { entry ?
                        <div>
                            <Typography component="p">
                                {entry.name}
                            </Typography>
                            <Typography component="p">
                                {entry.content.substring(0,140)}
                            </Typography>
                        </div>
                    :
                        <Typography component="p">No Journal Entries</Typography>
                    }
                </CardContent>
                <CardActions>
                    <Button onClick={() => this.props.changeCampaignTab({ index: 0 })} dense color="primary">
                        Read More
                    </Button>
                </CardActions>
            </Grid>
        )
    }
}

export const styles = theme => ({
    container: {
        margin: 10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignDashboardJournal));
