import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
//material-ui
import Button from 'material-ui/Button'
import Input from 'material-ui/Input/Input'
import { withStyles } from 'material-ui/styles';

class CampaignListingToolBar extends React.Component {
    render(){
        const classes = this.props.classes
        return(
            <div>
            <Button raised color="primary" className={classes.button}>
                Create Campaign
            </Button>
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
