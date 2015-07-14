'use strict';

var React = require('react');

var WidgetContainerHeader = React.createClass({

    render: function() {
        return (
            
                <div className="w-panel-header-container">
                    <div className="w-panel-header">
                        <div className="w-panel-header-title">
                            Lead Response Times
                        </div>
                        <div className="w-panel-header-actionset">
                            <div className="w-panel-header-action">
                                <span className="">
                                    <i className="fa fa-bars"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
});

module.exports = WidgetContainerHeader;
