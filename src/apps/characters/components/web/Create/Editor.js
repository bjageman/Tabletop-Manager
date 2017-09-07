import React from 'react'
//Material-UI Imports
import TextInput from 'apps/toolkit/components/web/forms/TextInput'



class CharacterEditor extends React.Component {
    render(){
        const character = this.props.character;
        return(
            <div >
                <TextInput

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

export default (CharacterEditor)
