import React from 'react'

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

import Delete from '../Delete/'
import Update from '../Update/'

const defaultImage = "http://eadb.org/wp-content/uploads/2015/08/profile-placeholder.jpg"

class CharacterEntry extends React.Component {

    handleClick(event){
        event.preventDefault()
        console.log("Clicked!")
    }

    render(){
        const character = this.props.character
        const classes = this.props.classes
        return(
            <GridListTile>
                <img src={character.image || defaultImage} alt={character.name}/>
                <GridListTileBar
                    title={character.name}
                    subtitle={
                        <span>
                          by: <a href={`/users/profile/${character.author.id}`}>{character.author.username}</a>
                        </span>
                    }
                    actionIcon={
                        <div>
                            <Delete character={character} />
                            <Update character={character} />
                        </div>
                    }
                />
            </GridListTile>
        )
    }
}


export const styles = theme => ({

});

export default withStyles(styles)(CharacterEntry)
