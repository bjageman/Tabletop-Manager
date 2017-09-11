import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { Card , Button } from 'bjageman-react-toolkit';

import ReduxLink from 'apps/toolkit/components/web/links/Redux'

class CampaignDashboardCalendar extends React.Component {
    render(){

        const event = this.props.event
        return(
            <div style={styles.card}>
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
            </div>
        )
    }
}


const styles = {
    card: {
        width: "350px",
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampaignDashboardCalendar);
