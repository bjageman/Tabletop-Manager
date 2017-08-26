import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography'

import Header from './Header'
import Members from './Members'
import Journal from './Journal'
import Calendar from './Calendar'

class CampaignDashboard extends React.Component {
    render(){
        const campaign = this.props.campaign
        const classes = this.props.classes
        const backgroundImage =  campaign.image || "https://bravenewdungeon.files.wordpress.com/2013/08/ph-barroom-brawl.jpeg"
        const backgroundImageCSS = "url('" + backgroundImage + "')"
        return(
            <div id="campaign-dashboard">
                <Header name={campaign.name} image={campaign.image} />
                <Grid container>
                    <Members />
                    <Calendar event = { campaign.calendar ? campaign.calendar[0]: null } />
                    <Journal entry = { campaign.journal ? campaign.journal[0] : null } />
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
    title: {
        color: "white",
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignDashboard));
