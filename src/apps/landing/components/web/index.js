import React, { Component } from 'react';

import Jumbotron from './Jumbotron'
import ToolBar from 'apps/base/components/web/ToolBar'

class LandingPage extends Component {
    render(){
        
        return(
            <div>
                <ToolBar />
                <Jumbotron
                    title = "RPG Manager"
                    subtitle = "A powerful resource for managing your campaign"
                    />
            </div>
        )
    }
}

export default LandingPage
