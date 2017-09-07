import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'
import { push } from 'react-router-redux'
import  store  from 'redux/store'

//Material-UI


import Button from 'apps/toolkit/components/web/Button'
import InvisibleLink from 'apps/toolkit/components/web/links/InvisibleLink'

import myConfig from 'config.js';

class HomeButton extends React.Component {
    render(){
        const name = this.props.name + "-" + myConfig.VERSION

        if (this.props.user){
            HomeButton = <InvisibleLink to= "/campaign" >{name}</InvisibleLink>
        } else {
            HomeButton = <InvisibleLink to= "/" >{name}</InvisibleLink>
        }
        return(
            <div>{HomeButton}</div>
        )
    }
}


export const styles = theme => ({
    flex: {
      flex: 1,
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);
