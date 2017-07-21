import React from 'react'
//Material-UI Imports
import Dialog, {DialogContent} from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField';

import { withStyles, createStyleSheet } from 'material-ui/styles'

class CharacterEditor extends React.Component {
    render(){
        const { classes, character, ...other } = this.props;
        return(
            <div className={classes.container}>
                <TextField
                  className={classes.textField}
                  id="name"
                  label="Name"
                  margin="normal"
                  placeholder={character.name || ""}
                />
                <TextField
                  className={classes.textField}
                  id="subtitle"
                  label="Title"
                  margin="normal"
                  placeholder={character.subheader || ""}
                />
            </div>
        )
    }
}

const styleSheet = createStyleSheet('CharacterEditor', {
    container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: "100%",
  },
});

export default withStyles(styleSheet)(CharacterEditor)
