import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { EntryHeader } from './entries/Reader'
import Editor from './entries/Editor'
import EntryRead from './entries/Reader'

import BlogListing from './blog/Listing'
import EntryListing from './entries/Listing'

class Blog extends Component {
  render() {
    return (
    <div>
      <Switch>
          <Route exact path={`${this.props.match.url}`} component = {BlogListing} />
          <Route exact path={`${this.props.match.url}/:blogId`} component = {EntryListing} />
          <Route exact path={`${this.props.match.url}/:blogId/entry/create`} component = {Editor} />
          <Route exact path={`${this.props.match.url}/:blogId/entry/:entryId`} component = {EntryRead} />
          <Route exact path={`${this.props.match.url}/:blogId/entry/:entryId/edit`} component = {Editor} />
      </Switch>
    </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
