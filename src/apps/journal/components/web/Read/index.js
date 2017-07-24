import React from 'react'

import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import EntryDialog from './Dialog'
import Delete from '../Delete/'

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
        const { entry, classes, ...other } = this.props
        return(
            <div className = "journal-entry">
            <Card className={classes.card}>
                <a onClick={() => this.setState({ open: true })} className={classes.link}>
                    <CardHeader
                        avatar={
                          <Avatar
                            alt={entry.author.username}
                            src={entry.author.avatar}
                          />
                        }
                        title={entry.title}
                        subheader={entry.date}
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
                </CardActions>
            </Card>
            <EntryDialog
                entry={entry}
                open={this.state.open}
                onRequestClose={this.handleRequestClose} />
            </div>
        )
    }
}

export default withStyles(styleSheet)(JournalEntry)