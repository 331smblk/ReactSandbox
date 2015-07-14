'use strict';

var React = require('react');

var SideBar = React.createClass({

    render: function() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav" id="sidebar-subnav">
                    <li>
                        <a href="#" data-target="#subnav1">Manager</a>
                    </li>
                    <li>
                        <ul id="subnav1" className="collapse" >
                            <li><a href="index.html?Report=Manager.Today" data-target="#subnav1">Today</a></li>
                            <li><a href="index.html?Report=Manager.Leads" data-target="#subnav1">Leads</a></li>
                            <li><a href="index.html?Report=Manager.Sales" data-target="#subnav1">Sales</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" data-target="#subnav2">Salesperson</a>
                    </li>
                    <li>
                        <ul id="subnav2" className="collapse">
                            <li><a href="index.html?Report=Salesperson.Today" data-target="#subnav2">Today</a></li>
                            <li><a href="index.html?Report=Salesperson.Leads" data-target="#subnav2">Leads</a></li>
                            <li><a href="index.html?Report=Salesperson.Sales" data-target="#subnav2">Sales</a></li>
                        </ul>
                    </li>
                        <li>
                            <a href="#" data-target="#subnav3">Service</a>
                        </li>
                    <li>
                        <ul id="subnav3" className="collapse">
                            <li><a href="index.html?Report=Service.Today" data-target="#subnav3">Today</a></li>
                            <li><a href="index.html?Report=Service.Analyze" data-target="#subnav3">Analyze</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" data-target="#subnav4">Analytics</a>
                    </li>
                    <li>
                        <ul id="subnav4" className="collapse" >
                            <li><a href="index.html?Report=Analytics.MyAnalytics" data-target="#subnav4">My Analytics</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" data-target="#subnav5">Dashboard</a>
                    </li>
                    <li>
                        <ul id="subnav5" className="collapse" >
                            <li><a href="index.html?Report=Dashboard.SelfService" data-target="#subnav5">My Dashboard</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="index.html?Report=NewReports.ChartGallery">Gallery</a>
                    </li>                    
                </ul>
            </div>
        );
    }
});

module.exports = SideBar;