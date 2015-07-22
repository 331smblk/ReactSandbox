'use strict';

var React = require('react');

var MainNavigationItem = require('./MainNavigationItem');

var MainNavigation = React.createClass({

    render: function() {
        return (

            <ul className="nav navbar-nav">
                {this.props.menuData.items.map(function(menuItem, index) {
                    return (
                        <MainNavigationItem key={index} menuItem={menuItem} />
                    );
                })}
            </ul>

        );
    }
});

module.exports = MainNavigation;
