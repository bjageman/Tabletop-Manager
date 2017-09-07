import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Loading from 'apps/toolkit/components/web/loading/Linear'
import Read from './Read/'
import Search from './Read/Search'
import Create from './Create/'

class CampaignCalendar extends Component {
    constructor(props){
        super(props)
        this.props.getCalendar({ id: this.props.campaign.id })
    }
    render() {
        const calendar = this.props.calendar
        return (
        <div>
          { calendar && calendar.fetching ? <Loading /> : null }
          <div >
                <Search />
              { this.props.is_owner ? <Create /> : null }
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
