import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Card from 'apps/toolkit/components/web/Card';
import Button from 'apps/toolkit/components/web/Button'

import ReduxLink from 'apps/toolkit/components/web/links/Redux'

class CampaignDashboardCalendar extends React.Component {
    render(){
        
        const event = this.props.event
        return(
            <Card>
            <h2>Upcoming Event</h2>
            { event ?
                <div><p>{event.name}</p></div>
            :
                <p>No Upcoming Events</p>
            }
            <ReduxLink campaignLink to="calendar">
                <Button dense color="primary">
                    See Events
                </Button>
            </ReduxLink>
            </Card>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CampaignDashboardCalendar);
