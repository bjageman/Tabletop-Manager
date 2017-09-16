import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import { TextInput } from 'bjageman-react-toolkit'

class CampaignSearch extends React.Component {
    state = {search: ""}
    handleChange = (event) => {
        let value = event.target.value
        this.setState({search: value})
        this.props.getCampaigns({
            access_token: this.props.user.access_token,
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

export default connect(mapStateToProps, mapDispatchToProps)(CampaignSearch)
