import React from 'react'
import Card from 'apps/toolkit/components/web/Card';

import data from 'mocks/campaign.json'

class UserCard extends React.Component {
    render() {
        const user = data[0].owner
        return (
        <Card>
            <img src={user.image} />
            {user.username}
            {user.email}
        </Card>
        )
    }
}

export default UserCard
