import React, { Component } from 'react';

import Jumbotron from './Jumbotron'

class LandingPage extends Component {
    render(){
        return(
            <div>
                <Jumbotron
                    title = "RPG Manager"
                    subtitle = "A powerful resource for managing your campaign"
                    />
            </div>
        )
    }
}

export default LandingPage
