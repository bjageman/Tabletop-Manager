import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import ipad_img from './img/ipad.png'
import dice_img from './img/dice.jpg'

class IntroHeader extends Component {
    render(){
        return(
            <div className="intro-header">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1>Landing Page</h1>
                            <h3>A Template by Start Bootstrap</h3>
                            <hr className="intro-divider" />
                            <ul className="list-inline intro-social-buttons">
                                <li>
                                    <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                                </li>
                                <li>
                                    <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

class SectionA extends Component {
    render(){
        return(
        <div className="content-section-a">

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer" />
                        <div className="clearfix"></div>
                        <h2 className="section-heading">Death to the Stock Photo:<br />Special Thanks</h2>
                        <p className="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src={ipad_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

class SectionB extends Component {
    render(){
        return(
        <div className="content-section-b">

        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr className="section-heading-spacer" />
                    <div className="clearfix"></div>
                    <h2 className="section-heading">3D Device Mockups<br />by PSDCovers</h2>
                    <p className="lead">Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!</p>
                </div>
                <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img className="img-responsive" src={dice_img} alt="" />
                </div>
            </div>

        </div>
        </div>
        )
    }
}

class LandingPage extends Component {
    render(){
        return(
            <div>
            <IntroHeader />
            <SectionA />
            <SectionB />
            </div>
        )
    }
}

export default LandingPage
