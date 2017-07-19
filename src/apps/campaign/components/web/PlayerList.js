import React from 'react'
import List, { ListItem, ListItemText, ListSubheader, ListItemAvatar, } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class PlayerList extends React.Component {
    renderPlayerItem(player, i){
        return(
            <ListItem key={i} button>
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
                this.renderPlayerItem(player, i)
            ))
            }
            </List>
        )
    }
}

export default PlayerList
