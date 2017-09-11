import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { LinearLoading } from 'bjageman-react-toolkit'
import Read from './Read/'
import Search from './Read/Search'
import Create from './Create/'

import { checkOwner } from 'utils'

class CampaignCalendar extends Component {
    constructor(props){
        super(props)
        this.props.getCalendar({ id: this.props.campaign.id })
    }
    render() {
        const is_owner = checkOwner(this.props.user, this.props.campaign)
        const calendar = this.props.calendar
        return (
        <div>
          { calendar && calendar.fetching ? <LinearLoading /> : null }
          <div >
                <Search />
              { is_owner ? <Create /> : null }
              {calendar.entries && calendar.entries.map((event, i) => (
                <div key = {event.id} className = "campaign-event">
                    <Read event = {event} />
                </div>
              ))}
          </div>
      </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignCalendar);
