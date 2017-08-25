import React from 'react'
import { Redirect } from 'react-router'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import ToolBar from 'apps/base/components/web/ToolBar'

import Dashboard from './dashboard/'
import Journal from 'apps/journal/components/web'
import Characters from 'apps/characters/components/web/'
import Maps from 'apps/maps/components/web/'
import Wiki from 'apps/wiki/components/web/'
import Calendar from 'apps/calendar/components/web/'


import Loading from 'apps/toolkit/Loading'

import { checkOwner } from 'apps/toolkit/utils'

class Campaign extends React.Component {
    constructor(props){
        super(props)
        if (this.props.match.params.id){
            this.props.getCampaign({
                id: this.props.match.params.id
            })
        }else{
            console.log("Show Error Message")
        }

    }

    handleTabChange = (event, index) => {
        this.setState({ index });
    };

    render(){
        const index = this.props.campaign && this.props.campaign.index != null ? this.props.campaign.index : -1
        const user = this.props.user
        const campaign = this.props.campaign
        const is_owner = checkOwner(user, campaign)
        const loading = false
        if (campaign){
            return(
            <div>
                <ToolBar tabs />
                {index === -1 &&
                    <Dashboard
                        campaign={campaign}
                        is_owner={is_owner} />}
                {index === 0 &&
                    <Journal
                        campaign={campaign}
                        is_owner={is_owner} />}
                {index === 1 &&
                    <Characters
                        campaign={campaign}
                        is_owner={is_owner} />}
                {index === 2 &&
                    <Maps
                        campaign={campaign}
                        is_owner={is_owner} />}
                {index === 3 &&
                    <Calendar
                        campaign={campaign}
                        is_owner={is_owner} />}
                {index === 4 &&
                    <Wiki
                        campaign={campaign}
                        is_owner={is_owner} />}
            </div>
            )

        }else if (loading || this.props.match.params.id){
            return(
                <Loading />
            )
        }else{
            return(
                <Redirect to="/campaigns" />
            )
        }
    }
}

export const styles = theme => ({
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Campaign));
