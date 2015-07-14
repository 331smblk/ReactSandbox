'use strict';

var React = require('react');

var TopNavigation = React.createClass({

    render: function() {
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
                        <a className="navbar-brand" href="#menu-toggle" id="menu-toggle"><img className="vin-logo" src={'img/Vin_logo_white_188w.png'} /></a>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">CRM</a></li>
                            <li><a href="#">Inventory</a></li>
                            <li><a href="#">Websites</a></li>
                            <li><a href="#">Service Center</a></li>
                            <li><a href="#">Desking</a></li>
                            <li><a href="#">Campaigns</a></li>
                            <li><a href="#">Reporting</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Status: OUT</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle dd-user-group" data-toggle="dropdown" ><i className="fa fa-user fa-2x"></i>  <span className="caret"></span></a>
                                <ul className="dropdown-menu user-menu" role="menu">
                                    <li>
                                        <span>Welcome, <br /><b>Britton Snyder</b><button type="submit" className="btn btn-sm btn-default pull-right">Log Out</button></span>
                                    </li>
                                    <li><a href="#">My Profile</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Training</a></li>
                                    <li><a href="#">Community</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#" className="btn btn-default"><i className="fa fa-life-ring"></i>  Support</a></li>
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
