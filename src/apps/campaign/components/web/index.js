import React from 'react'
import { Redirect, Route } from 'react-router'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import { withStyles } from 'material-ui/styles';

import ToolBar from 'apps/base/components/web/ToolBar'

import Dashboard from './dashboard/'
import { JournalRouter } from 'apps/journal/components/web/router'
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
    render(){
        const match = this.props.match
        const user = this.props.user
        const campaign = this.props.campaign
        const is_owner = checkOwner(user, campaign)
        const loading = false
        if (campaign){
            return(
            <div>
                <ToolBar tabs />
                <Route exact path={match.url} render={() =>
                    <Dashboard
                        campaign={campaign}
                        is_owner={is_owner}
                    /> }/>
                <Route path={match.url + '/journal'} component={JournalRouter} />
                <Route path={match.url + '/characters'} render={() =>
                    <Characters
                        campaign={campaign}
                        is_owner={is_owner}
                    /> }/>
                <Route path={match.url + '/maps'} render={() =>
                    <Maps
                        campaign={campaign}
                        is_owner={is_owner}
                    /> }/>
                <Route path={match.url + '/calendar'} render={() =>
                    <Calendar
                        campaign={campaign}
                        is_owner={is_owner}
                    /> }/>
                <Route path={match.url + '/wiki'} render={() =>
                    <Wiki
                        campaign={campaign}
                        is_owner={is_owner}
                    /> }/>
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
