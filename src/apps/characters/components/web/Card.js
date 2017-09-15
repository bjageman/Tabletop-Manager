import React from 'react'

import { Card, CardContent } from 'bjageman-react-toolkit'
import ReduxLink from 'apps/base/components/web/links/Redux'

import CharacterDelete from './Delete/'
import CharacterUpdate from './Save/Update'

const defaultImage = "http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg"

class CharacterCard extends React.Component {

    handleClick(event){
        event.preventDefault()

    }

    render(){
        const character = this.props.character
        return(
        <Card hoverFloat>
            <CardContent>
                <ReduxLink to={ "characters/" + character.slug} >
                    <div style={{display: "inline", float: "left"}}>
                        <h4>{character.name}</h4>
                        {character.sheet ? <a href={character.sheet.url}>Character Sheet</a> : null}
                        <p>by: <a href={`/users/profile/${character.author.id}`}>{character.author.username}</a></p>
                    </div>
                </ReduxLink>
                <div style={{position: "relative", display: "inline", float: "right", top:0}}>
                    <CharacterDelete character={character} /> <CharacterUpdate character={character} />
                </div>
            </CardContent>
            <img style={{width:"100%"}} src={character.image ? character.image.url : defaultImage} alt={character.name}/>
        </Card>
        )
    }
}

export default CharacterCard
