'use strict';

var React = require('react');

var WidgetContainer = require('./widgetContainer');

var Widget6Col = React.createClass({

    render: function() {
        return (

                <div className="col-lg-6 col-md-12 col-sm-12">
                    <WidgetContainer />
                </div>


        );
    }
});

module.exports = Widget6Col;