import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

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


class EntryListing extends Component {
    componentWillMount(props){
        this.props.getBlog({
            "blog_id": this.props.match.params.blogId
        })
    }

    handleEdit(title){
        console.log("EDIT " + title)
    }

    handleDelete(title){
        console.log("DELETE " + title)
    }

    render(){
        if (this.props.blog != null) {
            return (

                <div style={styles.container}>
                    <Link to={`${this.props.match.url}/entry/create`}>
                        <FloatingActionButton>
                            <ContentAdd />
                        </FloatingActionButton>
                    </Link>
                {
                    this.props.blog.entries.map((entry, i) => (
                        <Card style={styles.card}>
                            <CardHeader
                              title={entry.title}
                              subtitle={entry.subtitle}
                              actAsExpander={true}
                              showExpandableButton={true}
                            />
                            <CardText expandable={true}>
                              {entry.content}
                            </CardText>
                            <CardActions>
                              <FlatButton label="Edit" onTouchTap={() => this.handleEdit(entry.title)} />
                              <FlatButton label="Delete" onTouchTap={() => this.handleDelete(entry.title)}/>
                            </CardActions>
                        </Card>
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
