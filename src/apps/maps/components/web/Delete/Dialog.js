import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//Material-UI Imports
import Dialog from 'apps/toolkit/components/web/Dialog'

import Button from 'apps/toolkit/components/web/Button'


class MapDeleteDialog extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.deleteMap({
            campaign_id: this.props.campaign.id,
            map_id: this.props.map.id,
            access_token: this.props.user.access_token,
        })
        this.props.onRequestClose()
    }

    render(){
        // 
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose} >
            
                Are you sure you want to delete?
            
            <Button onClick = {this.handleDelete} color="primary">
              Delete
            </Button>
            <Button onClick = {this.props.onRequestClose} color="primary">
              Cancel
            </Button>
            </Dialog>
        )
    }
}

export const styles = theme => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(MapDeleteDialog)
