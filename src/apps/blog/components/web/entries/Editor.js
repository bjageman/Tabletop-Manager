import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import data from 'apps/blog/mock-data/blog.json'

const styles = {
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft:40,
    marginRight: 40,
  },
};


class Editor extends Component {
  constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      const blog = data[this.props.match.params.blogId]
      const entry = this.props.match.params.entryId ? blog.entries[this.props.match.params.entryId] : {"title": "", "subtitle": "", "content": ""}
      this.state = {
          "blog" : {
            "name": blog.name,
          },
          "entry": {
              "title": entry.title,
              "subtitle": entry.subtitle,
              "content": entry.content,
          }
      }
  }

  handleChange(event){
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit(event){
      event.preventDefault()
      this.props.saveEntry({
            "blog_id": 1,
            "title": this.state.title,
            "subtitle": this.state.subtitle,
            "content": this.state.content,
        })
      }


  render() {
    return (
        <div style={styles.container}>
        <Card style={styles.card}>
        <CardHeader
          title={this.state.blog.name}
        />
        <CardTitle children={<TextField hintText="Enter Title" />} />
        <CardText>
          <TextField
              floatingLabelText="Enter content"
              floatingLabelFixed={true}
              multiLine={true}
              fullWidth={true}
              rows={4}
              rowsMax={10}
            />
        </CardText>
        <CardActions>
          <FlatButton label="Publish" />
          <FlatButton label="Delete" />
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
