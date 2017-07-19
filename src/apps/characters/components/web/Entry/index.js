import React from 'react'

import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styleSheet = createStyleSheet('NowPlayingCard', {
  card: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft:20,
    marginRight: 40,
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    maxHeight: 300,
    maxWidth: 150,
  },
});


class CharacterEntry extends React.Component {

    handleClick(event){
        event.preventDefault()
        console.log("Clicked!")
    }

    render(){
        const character = this.props.character
        const classes = this.props.classes
        return(
            <Grid className={classes.card} container gutter={24}>
                    <Grid item md={2} >
                        <img className={classes.image} src={character.image} alt={character.name}/>
                    </Grid>
                    <Grid item md={10} >
                        <Typography type="headline">{character.name}</Typography>
                        <Typography type="subheading" color="secondary">
                          {character.subheader}
                        </Typography>
                        <Typography type="body1">
                        Played By: <a href={`/users/profile/${character.author.id}`}>{character.author.username}</a>
                        </Typography>
                        <Typography component="p">
                            {character.descriptors[0].content}
                        </Typography>
                    </Grid>
            </Grid>
        )
    }
}

export default withStyles(styleSheet)(CharacterEntry)