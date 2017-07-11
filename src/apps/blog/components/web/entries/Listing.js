import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Typography from 'material-ui/Typography'
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import SvgIcon from 'material-ui/SvgIcon';

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
                        <Button>
                            Add
                        </Button>
                    </Link>
                {
                    this.props.blog.entries.map((entry, i) => (
                        <Card style={styles.card}>
                            <CardContent>

                            </CardContent>
                            <Typography type="headline" component="h2">{entry.title}</Typography>
                            <Typography component="p">{entry.subtitle}</Typography>
                            <CardActions>
                              <Button label="Edit" onTouchTap={() => this.handleEdit(entry.title)}>Edit</Button>
                              <Button label="Delete" onTouchTap={() => this.handleDelete(entry.title)}>Delete</Button>
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
