import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
import { push } from 'react-router-redux'
import  store  from 'redux/store'
//material-ui
import Typography from 'material-ui/Typography'
import { MenuItem } from 'apps/toolkit/components/web/Menu'
import { withStyles } from 'material-ui/styles';

import InvisibleLink from 'apps/toolkit/links/InvisibleLink'

class CampaignTabs extends React.Component {
    onClick = (location) => {
        store.dispatch(push('/campaign/' + this.props.campaign.slug + '/' + location))
    };

    render(){
        const campaign = this.props.campaign
        const baseLink = '/campaign/' + campaign.slug + '/'
        return(
        <div>
        <Typography type="body2">
            {campaign.name}
        </Typography>
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

export const styles = theme => ({
    tabbar: {
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignTabs));
