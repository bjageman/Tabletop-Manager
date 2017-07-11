import React from 'react'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText, ListSubheader, ListItemAvatar, } from 'material-ui/List';import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

import styleSheet from './styles/campaign'

import data from 'mocks/campaign.json'

class PlayerList extends React.Component {
    renderPlayerItem(player){
        return(
            <ListItem button>
                <ListItemAvatar>
                  <Avatar
                    alt={player.username}
                    src={player.avatar}
                  />
                </ListItemAvatar>
                <ListItemText primary={player.first_name + " " + player.last_name} />
            </ListItem>
        )
    }

    render(){
        return(
            <List subheader={<ListSubheader>Registered Players</ListSubheader>} >
            {
            this.props.players.map((player, i) => (
                this.renderPlayerItem(player)
            ))
            }
            </List>
        )
    }
}

class Campaign extends React.Component {
    render(){
        const campaign = data[0]
        const classes = this.props.classes;
        return(
            <Card className={classes.card}>
                <AppBar position="static">
                  <Tabs index={0} scrollable scrollButtons="auto">
                    <Tab label="Description" />
                    <Tab label="Journal" />
                    <Tab label="Characters" />
                    <Tab label="Forum" />
                  </Tabs>
                </AppBar>
                <CardMedia >
                  <div className={classes.imageContainer}>
                      <img className={classes.image} src={campaign.image} alt={campaign.name} />
                  </div>
                </CardMedia>
                <Grid container gutter={24}>
                    <Grid item xs={12} sm={6}>
                        <CardContent>
                          <Typography type="headline" component="h2">
                            {campaign.name}
                          </Typography>
                          <Typography component="p">
                            {campaign.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button dense color="primary">
                            Share
                          </Button>
                          <Button dense color="primary">
                            Learn More
                          </Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <PlayerList players={campaign.players}/>
                    </Grid>
                </Grid>
              </Card>
        )
    }
}

export default withStyles(styleSheet)(Campaign)
