'use strict';

var React = require('react');

var BreadCrumbs = React.createClass({

    render: function() {
        return (
            <div className="row">
                <ol className="breadcrumb">
                    <li><a href="#">CRM</a></li>
                    <li><a href="#">CRM Dashboard</a></li>
                </ol>
            </div>
        );
    }
});

module.exports = BreadCrumbs;
