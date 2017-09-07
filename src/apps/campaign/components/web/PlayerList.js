import React from 'react'
import { Link } from 'react-router-dom'

class PlayerList extends React.Component {
    renderPlayerItem(player, i){
        return(
            <Link key={i} style={{ textDecoration: 'none' }} to={"/profile/" + player.id}>
            <li> {player.username} {player.avatar} - {player.first_name + " " + player.last_name} </li>
            </Link>
        )
    }

    render(){
        return(
            <ul>
            {
            this.props.players.map((player, i) => (
                this.renderPlayerItem(player, i)
            ))
            }
            </ul>
        )
    }
}

export default PlayerList
