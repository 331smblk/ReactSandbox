'use strict';

var React = require('react');
var Widget3Col = require('./widget3Col');
var Widget6Col = require('./widget6Col');

var WidgetRow = React.createClass({

    render: function() {
        return (
            
            <div className="row">
                <Widget3Col />
                <Widget3Col />
                <Widget6Col />
            </div>
            
        );
    }
});

module.exports = WidgetRow;
