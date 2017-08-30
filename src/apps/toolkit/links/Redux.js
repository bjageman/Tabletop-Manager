import React from 'react'
import { NavLink } from 'react-router-dom'
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
        var to = this.props.to
        if (this.props.campaignLink){
            to = "/campaign/" + this.props.campaign.slug + "/" + to
        }

        return(
        <a className={classes.link} onClick={ () => store.dispatch(push(to)) }>{this.props.children}</a>
        )
    }
}

export const styles = theme => ({
    link: {
      cursor: "pointer",
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ReduxLink));
