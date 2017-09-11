import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { Dialog, Button } from 'bjageman-react-toolkit'

class CharacterDeleteDialog extends React.Component {
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete = () => {
        this.props.deleteCalendarEvent({
            campaign_id: this.props.campaign.id,
            event_id: this.props.event.id,
            access_token: this.props.user.access_token,
        })
        this.props.onRequestClose()
    }

    render(){
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose} >
                    Are you sure you want to delete?
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleDelete}>
                    Delete
                </Button>
                <Button
                    raised
                    onClick = {this.props.onRequestClose}>
                    Cancel
                </Button>
            </Dialog>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDeleteDialog)
