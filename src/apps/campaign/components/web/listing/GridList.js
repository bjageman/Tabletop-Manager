import React from 'react'
import { Redirect } from 'react-router'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { Grid, GridItem } from 'bjageman-react-toolkit'
import CampaignCard from './CampaignCard'

class CampaignGridList extends React.Component {
    constructor(props){
        super(props)
        this.props.getCampaigns({"access_token": this.props.user.access_token})
    }

    render(){
        const campaigns = this.props.campaign ? this.props.campaign.entries : null
        if (campaigns){
            return(
                <Grid>
                    {campaigns.map((campaign, i) => (
                        <GridItem key={i} >
                        <CampaignCard campaign={campaign} />
                        </GridItem>
                    ))}
                </Grid>
            )
        }else{
            return null
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignGridList);
