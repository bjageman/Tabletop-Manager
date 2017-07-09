import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import data from 'apps/blog/data/blog.json'

export class EntryHeader extends Component {
    renderTitle(title, subtitle){
        return (
            <div className="title">
            <h2 className="entry-title">
                {title}
            </h2>
            <h3 className="entry-subtitle">
                {subtitle}
            </h3>
            </div>
        )
    }

    render(){
        const id = this.props.id
        const title = this.props.title
        const subtitle = this.props.subtitle
        const author = this.props.author
        const date = this.props.date
        return(
            <div className="entry-preview">
                { this.props.baseUrl ?
                <Link to= { this.props.baseUrl + "/entry/" + id}>
                    {this.renderTitle(title, subtitle)}
                </Link>
                : this.renderTitle(title, subtitle)
                }
                <p className="entry-meta">Entryed by <a href = { "/user/" + author.id }>{author.name}</a> on {date}</p>
            </div>
        )
    }
}

export class EntryContent extends Component {
    render(){
        const body = this.props.body
        return(
            <div className="entry-body">
                {this.props.body}
            </div>
        )
    }
}

class EntryRead extends Component {
    render(){
        console.log(this.props.match.params, data[0].entries)
        const entry = data[0].entries[this.props.match.params.entryId]
        if (entry != null){
            return(
                <div className="blog-read">
                    <EntryHeader
                        id = {this.props.match.params.entryId}
                        title = {entry.title}
                        subtitle = {entry.subtitle}
                        author = {entry.author}
                        date = {entry.date}
                        />
                    <Link to={`${this.props.match.url}/edit`}>Edit</Link>
                    <EntryContent
                        body = {entry.content}
                        />
                </div>
            )
        }else{
            return(<p>Loading...</p>)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryRead)
