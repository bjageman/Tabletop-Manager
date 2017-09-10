import React from 'react'

import Card, { CardContent } from 'apps/toolkit/components/web/Card'

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
                <div style={{display: "inline", float: "left"}}>
                <h4>{character.name}</h4>
                <p>by: <a href={`/users/profile/${character.author.id}`}>{character.author.username}</a></p>
                </div>
                <div style={{position: "relative", display: "inline", float: "right", top:0}}>
                    <Delete character={character} /> <Update character={character} />
                </div>
            </CardContent>
        </Card>
        )
    }
}

export default CharacterEntry
