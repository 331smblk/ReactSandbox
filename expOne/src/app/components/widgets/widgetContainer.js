'use strict';

var React = require('react');

var WidgetContainerHeader = require('./widgetContainerHeader');
var WidgetContainerContent = require('./widgetContainerContent');

var WidgetContainer = React.createClass({

    render: function() {
        return (
            
                <div className="w-panel-outer-container">
                    <WidgetContainerHeader />
                    <WidgetContainerContent />
                </div>

        );
    }
});

module.exports = WidgetContainer;
