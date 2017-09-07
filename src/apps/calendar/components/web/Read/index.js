import React from 'react'
import Delete from '../Delete/'

class CampaignEvent extends React.Component {

    handleClick(event){
        event.preventDefault()

    }

    render(){
        const event = this.props.event

        return(
            <div>
            {event.start_time} - {event.end_time}
            <Delete event={event}/>
            {event.name}
            </div>
        )
    }
}

export default (CampaignEvent)
