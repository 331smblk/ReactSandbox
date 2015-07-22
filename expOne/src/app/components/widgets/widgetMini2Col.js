'use strict';

var React = require('react');

var WidgetMini2Col = React.createClass({

    render: function() {
        return (

                <div className="col-lg-2 col-md-2 col-sm-4">
                    <div className="">
                        <i className="fa fa-file-excel-o"></i><span>  100</span> <span> Requests</span>
                    </div>
                    
                </div>

        );
    }
});

module.exports = WidgetMini2Col;
