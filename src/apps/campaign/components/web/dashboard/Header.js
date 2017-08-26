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
        const headerImage =  this.props.image
        return(
            <div>
            { headerImage ?
            <Grid item xs={12} className={classes.header}>
                <img src={headerImage} alt={name} className= {classes.image}/>
            </Grid>
            : null }
            <Grid item xs={12}>
                <Typography type="display3" align="center" className={classes.title}>
                    {name}
                </Typography>
            </Grid>
            </div>
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
    image :{
        width: "100%",
        maxHeight:200,
    },
    title: {
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignDashboardHeader));
