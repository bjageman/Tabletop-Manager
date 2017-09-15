import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { Dialog, DialogContent, Button, Text } from 'bjageman-react-toolkit'

class CharacterDeleteDialog extends React.Component {
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleDelete = () => {
        this.props.deleteCampaign({
            campaign_id: this.props.campaign_delete.id,
            access_token: this.props.user.access_token,
        })
        this.props.onRequestClose()
    }

    render(){
        const campaign = this.props.campaign_delete
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose} >
                <DialogContent>
                    <Text h3>Are you sure you want to delete <strong>{campaign.name}</strong>?</Text>
                </DialogContent>
                <DialogContent>
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
                </DialogContent>
            </Dialog>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDeleteDialog)
