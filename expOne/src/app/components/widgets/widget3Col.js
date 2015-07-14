'use strict';

var React = require('react');

var WidgetContainer = require('./widgetContainer');

var Widget3Col = React.createClass({

    render: function() {
        return (

                <div className="col-lg-3 col-md-6 col-sm-12">
                    <WidgetContainer />
                </div>

        );
    }
});

module.exports = Widget3Col;
