'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var MainNavigationItem = React.createClass({
    
    render: function() {
        
        var isActive = this.props.menuItem.active ? 'active' : '' ;
        
        return (

            <li>
                <Link to={this.props.menuItem.routeName} className="">{ this.props.menuItem.name }</Link>
            </li>

        );
    }
});

module.exports = MainNavigationItem;
