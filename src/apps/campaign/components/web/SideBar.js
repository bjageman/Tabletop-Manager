import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { MenuItem } from 'apps/toolkit/components/web/Menu'
import InvisibleLink from 'apps/toolkit/components/web/links/InvisibleLink'

import Card, { CardContent } from 'apps/toolkit/components/web/Card';

// class CampaignSideBarHeader extends React.Component {
//     render(){
//         const campaign = this.props.campaign
//         return (
//             <h1 style={{textAlign:"center"}}>{campaign.name}</h1>
//         )
//     }
// }

const CampaignSidebarHeader = props => {
    const campaign = props.campaign
    return (
        <div>
        <h2 style={styles.header}>{campaign.name}</h2>
        <hr />
        </div>
    )
}

class CampaignSidebar extends React.Component {
    render(){
        const campaign = this.props.campaign
        const baseLink = '/campaign/' + campaign.slug + '/'
        return(
        <div>
            <CampaignSidebarHeader campaign={campaign} />
        <InvisibleLink to={baseLink}>
            <MenuItem>
                Dashboard
            </MenuItem>
        </InvisibleLink>
        <InvisibleLink to={baseLink + "journal"}>
            <MenuItem>
                Journal
            </MenuItem>
        </InvisibleLink>
        <InvisibleLink to={baseLink + "characters"}>
            <MenuItem>
                Characters
            </MenuItem>
        </InvisibleLink>
        <InvisibleLink to={baseLink + "maps"}>
            <MenuItem>
                Maps
            </MenuItem>
        </InvisibleLink>
        <InvisibleLink to={baseLink + "calendar"}>
            <MenuItem>
                Calendar
            </MenuItem>
        </InvisibleLink>
        </div>
        )
    }
}

const styles = {
    header: {
        textAlign: "center",
        fontFamily: "roboto",
        padding: "10px"
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignSidebar);
