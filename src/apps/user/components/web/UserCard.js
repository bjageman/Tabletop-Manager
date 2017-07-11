import React from 'react'
import Card, { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import data from 'mocks/campaign.json'

class UserCard extends React.Component {
    render() {
        const user = data[0].owner
        return (
        <Card>
          <CardHeader
            avatar={
              <Avatar src={user.avatar} />
            }
            title={user.username}
            subheader={user.email}
          />
        </Card>
        )
    }
}

export default UserCard
