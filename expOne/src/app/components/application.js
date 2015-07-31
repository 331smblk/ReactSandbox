'use strict';

var React = require('react');
var Router = require('react-router');

var menuStore = require('../stores/menuStore');
var TopNavigation = require('./navigation/topNavigation');
var BodyContent = require('./bodyContent');
var FootContent = require('./footContent');
var SideBar = require('./navigation/sidebar');

var Application = React.createClass({
    
    mixins: [ Router.State ],
    
    getInitialState: function() {
        return { 
            menuData: menuStore.getMenuData()
        };
    },
    componentDidMount: function() {
        menuStore.addChangeListener(this.updateState);
    },
    updateState: function() {
        this.setState(menuStore.getMenuData());
    },
    composeClass: function() {
        return this.state.menuData.sideNavToggled ? '' : 'toggled' ;
    },
    render: function() {
        
        return (
            <div id="main-wrapper" className={this.composeClass()}>
                <TopNavigation menuData={this.state.menuData} />
                <div className="container-fluid">
                    <SideBar menuData={this.state.menuData}  activeTopNavItemName={this.getRoutes()[1].name} />
                    <BodyContent menuData={this.state.menuData}  activeTopNavItemName={this.getRoutes()[1].name}/>
                </div>
                <FootContent />
            </div>
        );
    }
});

module.exports = Application;

