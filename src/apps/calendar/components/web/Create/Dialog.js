import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//Material-UI Imports
import Dialog, {DialogContent, DialogActions} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import TextField from 'material-ui/TextField';
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
        const classes = this.props.classes;
        return(
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.onRequestClose}
            >
            <div >
            <DialogContent>
                <TextField
                  id="name"
                  label="Event Name"
                  className={classes.textField}
                  value={this.state.name}
                  onChange={event => this.setState({ name: event.target.value })}
                />
            </DialogContent>
            <DialogContent>
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
            </DialogContent>
            <DialogActions>
                <Button
                    raised
                    color="primary"
                    onClick = {this.handleSave}>
                    Save
                </Button>
                <Button onClick = {this.props.onRequestClose} color="primary">
                  Cancel
                </Button>
            </DialogActions>
            </div>
            </Dialog>
        )
    }
}

const styleSheet = createStyleSheet('CreateEventDialog', {
    dialog:{
        width:600,
        height:400,
    },
    info:{
        color: "purple"
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(CreateEventDialog))
