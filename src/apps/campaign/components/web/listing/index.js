import React from 'react'
import { Redirect } from 'react-router'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'


import CampaignListingToolBar from './ToolBar'

//toolkit
import { LinearLoading, Grid, GridItem } from 'bjageman-react-toolkit'
import CampaignCard from './CampaignCard'

class CampaignListing extends React.Component {
    constructor(props){
        super(props)
        if (this.props.user){
            this.props.getUser({"access_token": this.props.user.access_token})
        }
        if (this.props.campaign){
            this.props.logOutCampaign()
        }
    }

    render(){
        const user = this.props.user
        const loading = false
        if (user){
            return(
            <div>
                <CampaignListingToolBar />
                <Grid>
                    {user.campaigns ? user.campaigns.map((campaign, i) => (
                        <GridItem>
                        <CampaignCard campaign={campaign} />
                        </GridItem>
                    )): null }
                </Grid>
            </div>
            )
        }else if (loading){
            return(
                <LinearLoading />
            )
        }else{
            return(
                <Redirect to="/" />
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignListing);
