import React from 'react'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withStyles, createStyleSheet } from 'material-ui/styles';

class UserProfileTabs extends React.Component {
    state = {
        index: 0,
    };

    handleChange = (event, index) => {
        this.setState({ index });
    };

    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static">
                  <Tabs centered index={this.state.index} onChange={this.handleChange}>
                    <Tab label="Campaigns" />
                    <Tab label="Characters" />
                    <Tab label="Activity" />
                  </Tabs>
                </AppBar>

            </div>
        )
    }
}
const styleSheet = createStyleSheet('UserProfileTabs', {

});

export default withStyles(styleSheet)(UserProfileTabs)
