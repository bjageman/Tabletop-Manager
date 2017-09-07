import React from 'react'

import TextInput from 'apps/toolkit/components/web/forms/TextInput'


class CampaignEventSearch extends React.Component {
    render(){
        return(
            <div className="search-bar">
                <TextInput
                  id="search"
                  label="Search"
                />
            </div>
        )
    }
}

export const styles = theme => ({  container:{
  },
});

export default (CampaignEventSearch)
