import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { TextInput } from 'bjageman-react-toolkit'

class CharacterSearch extends React.Component {
    state = {search: ""}
    handleChange = (event) => {
        let value = event.target.value
        this.setState({search: value})
        this.props.getCharacters({
            id: this.props.campaign.id,
            search: value, 
        })
    }

    render(){
        return(
            <div className="search-bar">
                <TextInput
                  onChange = {this.handleChange}
                  value={this.state.search}
                  id="search"
                  label="Search"
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearch)
