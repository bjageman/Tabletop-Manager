import React from 'react'

import TextField from 'material-ui/TextField';
import { withStyles, createStyleSheet } from 'material-ui/styles';

class CampaignEventSearch extends React.Component {
    render(){
        return(
            <div className="search-bar">
                <TextField
                  id="search"
                  label="Search"
                  margin="normal"
                />
            </div>
        )
    }
}

const styleSheet = createStyleSheet('CampaignEventSearch', {
  container:{
  },
});

export default withStyles(styleSheet)(CampaignEventSearch)
