import React from 'react'
//Material-UI Imports
import TextField from 'material-ui/TextField';

import { withStyles } from 'material-ui/styles';

class CharacterEditor extends React.Component {
    render(){
        const { classes, character } = this.props;
        return(
            <div className={classes.container}>
                <TextField
                  className={classes.textField}
                  id="name"
                  name="name"
                  label="Name"
                  margin="normal"
                  defaultValue={character.name || ""}
                  onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export const styles = theme => ({
container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: "100%",
  },
});

export default withStyles(styles)(CharacterEditor)
