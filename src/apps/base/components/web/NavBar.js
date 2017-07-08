import React from 'react'
import { Link } from 'react-router-dom'

class NavLinks extends React.Component {
    render(){
        return(
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        )
    }
}

class NavBar extends React.Component {
    render(){
        const brandName = "RPG Manager"
        return(
            <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
                <div className="container topnav">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand topnav" href="#">Start Bootstrap</a>
                    </div>
                    <NavLinks />
                </div>
            </nav>
        )
    }
}

export default NavBar
