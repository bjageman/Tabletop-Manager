import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog from 'apps/toolkit/components/web/Dialog'

import Button from 'apps/toolkit/components/web/Button'




class CharacterDeleteDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete() {
        this.props.deleteCalendarEvent({
            campaign_id: this.props.campaign.id,
            event_id: this.props.event.id,
        })
        this.props.onRequestClose()
    }

    render(){
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
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

export const styles = theme => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDeleteDialog)
