'use strict';

var React = require('react');
var WidgetMini2Col = require('./widgetMini2Col');

var WidgetRowMini = React.createClass({

    render: function() {
        return (
            
            <div className="well well-sm">
                <div className="row">
                    <WidgetMini2Col />
                    <WidgetMini2Col />
                    <WidgetMini2Col />
                    <WidgetMini2Col />
                    <WidgetMini2Col />
                    <WidgetMini2Col />
                </div>
            </div>
            
        );
    }
});

module.exports = WidgetRowMini;
