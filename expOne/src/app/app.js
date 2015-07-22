'use strict';

    var React = require('react');
    var Router = require('react-router');
    var routes = require('./routes');

    var Application =  require('./components/application.js');

    Router.run(routes, function (Handler) {
        //note: Do NOT attach to <body> since other libs may manipulate this tag.
        //attach to a child tag instead.
        React.render(<Handler />, document.getElementById('wrapper'));
    });