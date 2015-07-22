'use strict';

var React = require('react');

var MainNavigation = require('./mainNavigation');
var menuActions = require('../../actions/menuActions');
var TopNavigation = React.createClass({

    
    sideNavToggle: function(){
        menuActions.sideNavToggle();
    },
    render: function() {
        
        //console.log(this.props.menuData);
        
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-1" role="navigation">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <span className="navbar-brand" onClick={this.sideNavToggle}><img className="vin-logo" src={'img/Vin_logo_white_188w.png'} /></span>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                      
                        <MainNavigation menuData={this.props.menuData} />
                                      
                                      
                        <ul className="nav navbar-nav navbar-right">
                           
                            <li className="dropdown">
                                <a className="dropdown-toggle dd-user-group" data-toggle="dropdown" ><i className="fa fa-user fa-2x"></i>  <span className="caret"></span></a>
                                <ul className="dropdown-menu user-menu" role="menu">
                                    <li>
                                        <span>Welcome, <br /><b>Britton Snyder</b><button type="submit" className="btn btn-sm btn-default pull-right">Log Out</button></span>
                                    </li>
                                    <li><a>My Profile</a></li>
                                    <li><a>News</a></li>
                                    <li><a>Training</a></li>
                                    <li><a>Community</a></li>
                                    <li className="divider"></li>
                                    <li><a className="btn btn-default"><i className="fa fa-life-ring"></i>  Support</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div> 

                </div> 

            </nav>
        );
    }
});

module.exports = TopNavigation;
