import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Editor from './Editor'
import EntryRead from './Reader'

class Entry extends Component {
    render(){
        return(
            <Switch>
                <Route exact path={`${this.props.match.url}/create`} component = {Editor} />
                <Route exact path={`${this.props.match.url}/:entryId`} component = {EntryRead} />
                <Route exact path={`${this.props.match.url}/:entryId/edit`} component = {Editor} />
            </Switch>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Entry);
