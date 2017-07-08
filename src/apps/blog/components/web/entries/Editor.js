import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../../../../redux/utils'

import data from '../../../data/blog.json'


class PostHeaderEditor extends Component {

    render() {
        return (
            <div className="post-preview">
                <form>
                    <h1 className="post-title">
                    <input
                        name="title"
                        className="form-control"
                        type="text"
                        value={this.props.title}
                        onChange={this.props.handleChange}
                        />
                    </h1>
                    <h3 className="post-subtitle">
                    <input
                        name="subtitle"
                        className="form-control"
                        type="text"
                        value={this.props.subtitle}
                        onChange={this.props.handleChange}
                        />
                    </h3>
                </form>
            </div>
        )
    }
}

class PostContentEditor extends Component {
    render(){
        return (
            <div className="post-editor">
                <form>
                    <textarea
                        name="content"
                        className="form-control"
                        value={this.props.body}
                        rows={10}
                        onChange={this.props.handleChange}
                        />
                </form>
            </div>
        )
    }
}

class Editor extends Component {
  constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      const entry = this.props.match.params.entryId ? data[0].entries[this.props.match.params.entryId] : {"title": "", "subtitle": "", "content": ""}
      this.state = {
          "title": entry.title,
          "subtitle": entry.subtitle,
          "content": entry.content,
      }
  }

  handleChange(event){
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event){
      event.preventDefault()
    //   this.props.updateEntry({
    //       entry_id : this.props.match.params.entryId,
    //       entry: {
    //           "title": this.state.title,
    //           "subtitle": this.state.subtitle,
    //           "content": this.state.content,
    //       }
    //   })
    this.props.saveEntry({
        "blog_id": 1,
        "title": this.state.title,
        "subtitle": this.state.subtitle,
        "content": this.state.content,
    })
  }


  render() {
    const entry = data[0].entries[this.props.match.params.entryId]
    return (
      <div className="blog-editor">
        <PostHeaderEditor
            id = {this.props.match.params.postId}
            title = {this.state.title}
            subtitle = {this.state.subtitle}
            handleChange = {this.handleChange}
            />
        <PostContentEditor
            body = {this.state.content}
            handleChange = {this.handleChange}
            />
        <input type="submit" className="btn btn-primary" value="Save" onClick={this.handleSubmit} />
        {this.props.user != null ? <p>{this.props.user.username}</p> : <p>Not Logged</p>}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
