import React from 'react'

//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

//Material-UI
import { withStyles, createStyleSheet } from 'material-ui/styles';

import AccountMenu from './AccountMenu'


class ToolBarTools extends React.Component {

    render() {
        return(
            <div>
                <AccountMenu username={this.props.user.username}/>
            </div>
        )
    }
}

const styleSheet = createStyleSheet('ToolBarTools', {
  flex: {
    flex: 1,
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styleSheet)(ToolBarTools));
