import React from 'react'

import Card, { CardContent, CardMedia } from 'apps/toolkit/components/web/Card'

import Delete from '../Delete/'
import Update from '../Update/'

const defaultImage = "http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg"

class CharacterEntry extends React.Component {

    handleClick(event){
        event.preventDefault()

    }

    render(){
        const character = this.props.character
        return(
        <Card hoverFloat>
            <img style={{width:"100%"}} src={character.image || defaultImage} alt={character.name}/>
            <CardContent>
                <h4>{character.name}</h4>
                <p>by: <a href={`/users/profile/${character.author.id}`}>{character.author.username}</a></p>
            </CardContent>
            <CardContent>
                <Delete character={character} /> <Update character={character} />
            </CardContent>
        </Card>
        )
    }
}

export default CharacterEntry
