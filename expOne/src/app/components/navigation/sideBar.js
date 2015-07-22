'use strict';

var React = require('react');
var _ = require('lodash');

var SideNavItem = require('./sideNavItem');

var SideBar = React.createClass({

    render: function() {
        var self = this;
        var selectedTopNavItem = _.find(this.props.menuData.items, function(topNavItem){
            return topNavItem.routeName === self.props.activeTopNavItemName;
        });
        var sideNavItems = selectedTopNavItem ? selectedTopNavItem.sideNavItems : [];
        return (
            
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav" id="sidebar-subnav">

                    {sideNavItems.map(function(menuItem, index) {
                        return(
                            <SideNavItem key={index} menuItem={menuItem} />
                        );
                    })}

                </ul>
            </div>
    
        );
    }
});

module.exports = SideBar;