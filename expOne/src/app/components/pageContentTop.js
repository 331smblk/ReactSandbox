'use strict';

var React = require('react');
var BreadCrumbs = require('./navigation/breadCrumbs');
var WidgetRow = require('./widgets/widgetRow');
var WidgetRowMini = require('./widgets/widgetRowMini');

var PageContentTop = React.createClass({

    render: function() {
        return (

            <div>

                <BreadCrumbs />
                <WidgetRowMini />
                <WidgetRow />
                
            </div>

        );
    }
});

module.exports = PageContentTop;
