'use strict';

var React = require('react');

var WidgetContainerContent = React.createClass({

    render: function() {
        return (
            
                <div className="w-panel-content-container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                            <div className="w-donut-img">
                                <img src={'img/knob-30min.png'} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <div>
                                <p><b>Target:</b><br/>Under 20 minutes</p>
                                <a href="#">See Details...</a>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
});

module.exports = WidgetContainerContent;
