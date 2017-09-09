import React from 'react'
import { Route } from 'react-router'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'



import Dashboard from './dashboard/'
import { JournalRouter } from 'apps/journal/components/web/router'
import Characters from 'apps/characters/components/web/'
import Maps from 'apps/maps/components/web/'
import Wiki from 'apps/wiki/components/web/'
import Calendar from 'apps/calendar/components/web/'


import Loading from 'apps/toolkit/components/web/loading/Linear'

import { checkOwner } from 'apps/toolkit/utils'

class Campaign extends React.Component {
    constructor(props){
        super(props)

        if (this.props.match.params.id){
            this.props.getCampaign({
                id: this.props.match.params.id
            })
        }
    }

    render(){
        const match = this.props.match
        const user = this.props.user
        const campaign = this.props.campaign
        const is_owner = checkOwner(user, campaign)
        if (campaign) {
        return(
            <div>
                <Route exact path={match.url} render={() => <Dashboard campaign={campaign} /> } />
                <Route path={match.url + '/journal'} component={JournalRouter}  />
                <Route path={match.url + '/characters'} component={Characters}  />
                <Route path={match.url + '/maps'} component={Maps}              />
                <Route path={match.url + '/calendar'} component={Calendar}      />
                <Route path={match.url + '/wiki'} render={() =>
                    <Wiki
                        is_owner={is_owner}
                    /> }/>
            </div>
        )
    }else{
        return <Loading />
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

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
