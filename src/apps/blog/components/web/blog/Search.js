import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../../../../redux/utils'

class BlogSearch extends Component {
    render(){
        return(
            <div className="blog-search">
                <input className="form-control" type="text" placeholder="search" />
                <br />
            </div>
        )
    }
}

export default BlogSearch
