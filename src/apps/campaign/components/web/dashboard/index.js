import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Header from './Header'
import Members from './Members'
import Journal from './Journal'
import Calendar from './Calendar'

class CampaignDashboard extends React.Component {
    render(){
        const campaign = this.props.campaign
        return(
            <div id="campaign-dashboard">
                <Header name={campaign.name} image={campaign.image} />
                <Grid>
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
