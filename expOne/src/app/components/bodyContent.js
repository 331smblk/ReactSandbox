'use strict';

var React = require('react');
var _ = require('lodash');
var RouteHandler = require('react-router').RouteHandler;

var PageContentTop = require('./pageContentTop');

var BodyContent = React.createClass({

    render: function() {
        return (
            
            <div id="page-content-wrapper">
                <RouteHandler/>
            </div>
            
        );
    }
});

module.exports = BodyContent;

