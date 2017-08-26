import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
import { push } from 'react-router-redux'
import  store  from 'redux/store'

//Material-UI
import { withStyles } from 'material-ui/styles';

class ReduxLink extends React.Component {
    render(){
        const classes = this.props.classes
        var link = this.props.link
        if (this.props.campaignLink){
            link = "/campaign/" + this.props.campaign.slug + link
        }

        return(
        <a className={classes.link} onClick={ () => store.dispatch(push(link)) }>{this.props.children}</a>
        )
    }
}

export const styles = theme => ({
    link: {
      cursor: "pointer",
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReduxLink));
