import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import Input from 'material-ui/Input/Input'
import { withStyles } from 'material-ui/styles';

import Save from '../save/'

class CampaignListingToolBar extends React.Component {
    render(){
        const classes = this.props.classes
        return(
            <div>
            <Save />
            <Input
                className={classes.search}
                placeholder="Search Campaigns"
                inputProps={{
                    'aria-label': 'Description',
                }}
                />
            </div>
        )
    }
}

export const styles = theme => ({
    button: {
        margin:10,
    },
    search: {
        marginLeft:10,
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignListingToolBar));
