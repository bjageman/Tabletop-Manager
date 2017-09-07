import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Card from 'apps/toolkit/components/web/Card';

class CampaignDashboardMember extends React.Component {
    render(){
        
        return(
            <Card>
                <h1>Members</h1>
                <p>To be filled in later</p>
            </Card>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDashboardMember);
