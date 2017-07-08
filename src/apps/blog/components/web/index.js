import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../../../redux/utils'

import { EntryHeader } from './entries/Reader'
import Entry from './entries/index'
import Editor from './entries/Editor'

import BlogListing from './blog/Listing'
import EntryListing from './entries/Listing'

var wrapStyle = {
  marginTop: '70px',
  marginBottom: '50px',
};

class Blog extends Component {
  render() {
    return (
    <div style={wrapStyle}>
      <Switch>
          <Route exact path={`${this.props.match.url}`} component = {BlogListing} />
          <Route exact path={`${this.props.match.url}/:blogId`} component = {EntryListing} />
          <Route path={`${this.props.match.url}/:blogId/entry`} component = {Entry} />
      </Switch>
    </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
