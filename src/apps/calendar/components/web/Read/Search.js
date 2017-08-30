import React from 'react'

import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

class CampaignEventSearch extends React.Component {
    render(){
        return(
            <div className="search-bar">
                <TextField
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

export default withStyles(styles)(CampaignEventSearch)
