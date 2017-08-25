import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'

class CampaignDashboardHeader extends React.Component {
    render(){
        const classes = this.props.classes
        const name = this.props.name
        const backgroundImage =  this.props.image || "https://bravenewdungeon.files.wordpress.com/2013/08/ph-barroom-brawl.jpeg"
        const backgroundImageCSS = "url('" + backgroundImage + "')"
        return(
            <Grid item xs={12} className={classes.header} style={{
                backgroundImage: "url('" + backgroundImage + "')",
                backgroundSize: 'cover',
                height: 200,
            }}>
                <Typography type="display3" align="center" className={classes.title}>
                    {name}
                </Typography>
            </Grid>
        )
    }
}

export const styles = theme => ({
    header: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        color: "white",
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignDashboardHeader));
