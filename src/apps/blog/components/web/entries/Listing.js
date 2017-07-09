import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { EntryHeader } from './Reader'

class EntryListing extends Component {
    componentWillMount(props){
        this.props.getBlog({
            "blog_id": this.props.match.params.blogId
        })
    }
    render(){
        if (this.props.blog != null) {
            return (
                <div>
                {
                    this.props.blog.entries.map((entry, i) => (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <EntryHeader
                                        id = {i}
                                        title = {entry.title}
                                        subtitle = {entry.subtitle}
                                        author = {entry.author}
                                        date = {entry.date}
                                        baseUrl = {`${this.props.match.url}`}
                                        />
                                    <hr />
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            )
        }else{
            return(<p>Loading Listing</p>)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryListing);
