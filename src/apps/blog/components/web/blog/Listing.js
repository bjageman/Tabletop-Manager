import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../../../../redux/utils'

import data from '../../../data/blog.json'

import BlogSearch from './Search'

class BlogListing extends Component {
    renderBlogPanel(blog, i){
        return (
            <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4">
                <Link to={"/blog/" + i} >
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        {blog.name}
                    </div>
                    <div className="panel-body">
                        <p>{blog.description}</p>
                    </div>
                    <div className="panel-footer">
                        4/5 Stars
                    </div>
                </div>
                </Link>
            </div>
            </div>
        )
    }
    render(){
        if (data != null) {
            return (
                <div className="container">
                    <BlogSearch />
                    {
                        data.map((blog, i) => (
                            this.renderBlogPanel(blog, i)
                        ))
                    }
                </div>
            )
        }else{
            return(<p>Loading Listing</p>)
        }
    }
}

export default BlogListing
