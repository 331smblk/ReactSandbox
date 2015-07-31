'use strict';

var React = require('react');
var _ = require('lodash');
var RouteHandler = require('react-router').RouteHandler;
var menuActions = require('../actions/menuActions');
var menuStore = require('../stores/menuStore');
var BreadCrumbs = require('./navigation/breadCrumbs');
var PageContentTop = require('./pageContentTop');

var BodyContent = React.createClass({

    render: function() {
        return (
            
            <div id="page-content-wrapper">
                <BreadCrumbs menuData={this.props.menuData}/>
                <RouteHandler/>
            </div>
            
        );
    }
});

module.exports = BodyContent;

