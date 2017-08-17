import React from 'react'
import Grid from 'material-ui/Grid'
import data from 'mocks/campaign.json'

import Banner from './Banner'
import TabBar from './TabBar'
import Body from './Body'

class UserProfile extends React.Component {
    render() {
        const params = this.props.match.params
        const user = params.userId ? data[0].players[params.userId] : data[0].owner
        return (
        <div>
            <Banner user={user} />
            <TabBar />
            <Grid container gutter={24} xs={12}>
                <Grid item md={4}>
                    Sidebar
                </Grid>
                <Grid>
                    <Body />
                </Grid>
            </Grid>

        </div>
        )
    }
}

export default UserProfile
