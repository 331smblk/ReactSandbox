'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var SideBarItem = React.createClass({

    render: function() {

        return (
            <li>
                <a href="#">{this.props.menuItem.name}</a>
            </li>
        );
    }
});

module.exports = SideBarItem;