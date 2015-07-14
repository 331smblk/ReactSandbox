'use strict';

var React = require('react');

var Widget6Col = React.createClass({

    render: function() {
        return (

                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="w-panel-outer-container">
                        <div className="w-panel-header-container">
                            <div className="w-panel-header">
                                <div className="w-panel-header-title">Lead Response Times</div>
                                <div className="w-panel-header-actionset">
                                    <div className="w-panel-header-action">
                                        <span className="">
                                            <i className="fa fa-bars"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-panel-content-container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="w-donut-img">
                                        <img src={'img/knob-30min.png'} />
                                    </div>
                                    <div className="w-donut-img">
                                        <img src={'img/knob-30min.png'} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div>
                                        <p><b>Target:</b><br/>Under 20 minutes</p>
                                        <a href="#">See Details...</a>
                                    </div>
                                    <div>
                                        <p><b>Target:</b><br/>Under 20 minutes</p>
                                        <a href="#">See Details...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        );
    }
});

module.exports = Widget6Col;