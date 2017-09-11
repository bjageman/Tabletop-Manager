import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import {Grid} from 'bjageman-react-toolkit';

import Header from './Header'
import Members from './Members'
import Journal from './Journal'
import Calendar from './Calendar'

class CampaignDashboard extends React.Component {
    componentWillUnMount(){
        if (this.props.campaign){
            this.props.logOutCampaign()
        }
    }

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


export default connect(mapStateToProps, mapDispatchToProps)(CampaignDashboard);
