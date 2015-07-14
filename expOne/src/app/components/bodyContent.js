'use strict';

var React = require('react');
var SideBar = require('./sideBar');
var PageContentTop = require('./pageContentTop');

var BodyContent = React.createClass({

    render: function() {
        return (
            
            <div className="container-fluid">
                <SideBar />
                <PageContentTop />
                <hr />
            </div>
            
        );
    }
});

module.exports = BodyContent;

