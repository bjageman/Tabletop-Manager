import React from 'react'

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import Dialog from './Dialog'
import Delete from '../Delete/'
import Update from '../Update/'

class JournalEntry extends React.Component {
    constructor(props){
        super(props)
        this.handleRequestClose = this.handleRequestClose.bind(this)
        this.state = {
            open: false,
        }
    }
    handleRequestClose(){
        console.log("CLOSE")
        this.setState({open: false})
    }

    render(){
        const { entry, classes } = this.props
        return(
            <div className = "journal-entry">
            <Card className={classes.card}>
                <a onClick={() => this.setState({ open: true })} className={classes.link}>
                    <CardHeader
                        avatar={
                          <Avatar
                            alt={entry.author.email}
                            src={entry.author.image}
                          />
                        }
                        title={entry.name}
                        subheader={entry.created}
                      />
                    <CardContent>
                        <Typography component="p">
                          {entry.content.length > 350 ? entry.content.slice(0,350) + "..." : entry.content}
                        </Typography>
                    </CardContent>
                </a>
                <CardActions disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                      <Icon>favorite</Icon>
                    </IconButton>
                    <IconButton aria-label="Share">
                      <Icon>share</Icon>
                    </IconButton>
                    {this.props.is_owner ? <Update entry={entry} /> : null }
                    {this.props.is_owner ? <Delete entry={entry} /> : null }
                </CardActions>
            </Card>
            <Dialog
                entry={entry}
                open={this.state.open}
                onRequestClose={this.handleRequestClose} />
            </div>
        )
    }
}

const styleSheet = createStyleSheet("JournalEntry", () => ({
  card: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft:20,
      marginRight: 40
  },
  link: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
}));

export default withStyles(styleSheet)(JournalEntry)
