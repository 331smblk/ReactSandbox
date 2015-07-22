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
            
                                <span className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" ><i className="fa fa-bars"></i></a>
                                    <ul className="dropdown-menu w-header-dd" role="menu">
                                        <li><a href="#" className=""><i className="fa fa-cog"></i>  Settings</a></li>
                                        <li><a href="#" className=""><i className="fa fa-trash-o"></i>  Remove</a></li>
                                        <li><a href="#" className=""><i className="fa fa-bar-chart"></i>  Trends</a></li>
                                        <li><a href="#" className=""><i className="fa fa-file-excel-o"></i>  Export</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#" className="btn btn-default"><i className="fa fa-life-ring"></i>  Support</a></li>
                                    </ul>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
});

module.exports = WidgetContainerHeader;
