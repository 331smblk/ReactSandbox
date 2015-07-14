'use strict';

var React = require('react');
var BreadCrumbs = require('./breadCrumbs');
var WidgetRow = require('./widgets/widgetRow');

var PageContentTop = React.createClass({

    render: function() {
        return (

            <div id="page-content-wrapper">

                <BreadCrumbs />
                <WidgetRow />

            </div>

        );
    }
});

module.exports = PageContentTop;
