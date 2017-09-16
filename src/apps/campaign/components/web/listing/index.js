import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import CampaignListingToolBar from './ToolBar'
import CampaignGridList from './GridList'
import { LinearLoading} from 'bjageman-react-toolkit'

class CampaignListing extends React.Component {
    constructor(props){
        super(props)
        if (this.props.user){
            this.props.getUser({"access_token": this.props.user.access_token})
        }
    }

    render(){
        const user = this.props.user
        const campaigns = this.props.campaign ? this.props.campaign.entries : null
        const loading = false
        if (user){
            return(
            <div>
                <CampaignListingToolBar />
                <CampaignGridList />
            </div>
            )
        }else{
            return(
                <LinearLoading />
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignListing);
