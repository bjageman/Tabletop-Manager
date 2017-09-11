import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Card from 'apps/toolkit/components/web/Card';

class CampaignDashboardMember extends React.Component {
    render(){

        return(
            <div style={styles.card}>
            <Card>
                <h1>Members</h1>
                <p>To be filled in later</p>
            </Card>
            </div>
        )
    }
}

const styles = {
    card: {
        width: "350px",
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDashboardMember);
