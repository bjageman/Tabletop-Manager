import React from 'react'
import Typography from 'material-ui/Typography';
import { withStyles, createStyleSheet } from 'material-ui/styles';

class UserProfileBody extends React.Component {
    render() {
        const { classes, ...other } = this.props
        return (
            <Typography type="display3">
            ENTER HERE
            </Typography>
        )
    }
}
const styleSheet = createStyleSheet('UserProfileBody', {

});

export default withStyles(styleSheet)(UserProfileBody)
