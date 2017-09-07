import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog from 'apps/toolkit/components/web/Dialog'
import Button from 'apps/toolkit/components/web/Button'

import TextInput from 'apps/toolkit/components/web/forms/TextInput'
//DatePicker
import Datetime from 'react-datetime';
import moment from 'moment';
import 'css/react-datetime.css';

import myConfig from 'config.js';


class CreateEventDialog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            start_time: moment(),
            end_time: moment()
        };
        this.handleStartChange = this.handleStartChange.bind(this)
        this.handleEndChange = this.handleEndChange.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleStartChange(date) {
        this.setState({
            start_time: date
        });
    }

    handleEndChange(date) {
        this.setState({
            start_time: date
        });
    }

    handleSave() {
        this.props.saveCalendarEvent({
            name: this.state.name,
            author_id: this.props.user.id,
            campaign_id: this.props.campaign.id,
            start_time: this.state.start_time.format(myConfig.DATETIMEFORMAT),
            end_time: this.state.end_time.format(myConfig.DATETIMEFORMAT),
        })
        this.props.onRequestClose()
    }

    render(){
        
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
            <div >
                <TextInput
                  id="name"
                  label="Event Name"
                  
                  value={this.state.name}
                  onChange={event => this.setState({ name: event.target.value })}
                />
                Start:
                <Datetime
                    name="start_time"
                    selected={this.state.start_time}
                    onChange={this.handleStartChange}
                />
                End:
                <Datetime
                    name="end_time"
                    selected={this.state.end_time}
                    onChange={this.handleEndChange}
                />

                <Button
                    raised
                    color="primary"
                    onClick = {this.handleSave}>
                    Save
                </Button>
                <Button onClick = {this.props.onRequestClose} color="primary">
                  Cancel
                </Button>
            </div>
            </Dialog>
        )
    }
}

export const styles = theme => ({
    dialog:{
        width:600,
        height:400,
    },
    info:{
        color: "purple"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventDialog)
