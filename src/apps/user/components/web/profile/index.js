import React from 'react'
//Redux
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from 'redux/utils'

import Banner from './Banner'

class UserProfile extends React.Component {
    render() {
        const user = this.props.user
        if (user){
            return (
            <div>
                <Banner user={user} />
            </div>
            )
        }else{
            return(<p></p>)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
