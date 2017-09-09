import React from 'react'
import Delete from '../Delete/'

import Card, { CardContent } from 'apps/toolkit/components/web/Card';

class CampaignEvent extends React.Component {

    handleClick(event){
        event.preventDefault()

    }

    render(){
        const event = this.props.event

        return(
            <Card width="600" hoverFloat >
                <CardContent>
                    {event.start_time} - {event.end_time}
                    <Delete event={event}/>
                    {event.name}
                </CardContent>
            </Card>
        )
    }
}

export default (CampaignEvent)
