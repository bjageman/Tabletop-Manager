import React from 'react'
import { Link } from 'react-router-dom'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  toolbar: {
    marginTop: 0,
    marginBottom: 20,
    marginLeft:0,
    marginRight: 0,
  },
};

class NavBar extends React.Component {
    render(){
        const brandName = "RPG Manager"
        return(
            <Toolbar styles={styles.toolbar}>
                <ToolbarGroup>
                    <Link to="/"><ToolbarTitle text={brandName} /></Link>
                </ToolbarGroup>
                <ToolbarGroup>
                    <Link to="/blog"><MenuItem primaryText="Blog" /></Link>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

export default NavBar
