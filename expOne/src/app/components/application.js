'use strict';

var React = require('react');

var TopNavigation = require('./topNavigation');
var BodyContent = require('./bodyContent');
var FootContent = require('./footContent');

var Application = React.createClass({

    render: function() {
        return (
            <div>
                <TopNavigation />
                <BodyContent />
                <FootContent />
            </div>
        );
    }
});

module.exports = Application;

