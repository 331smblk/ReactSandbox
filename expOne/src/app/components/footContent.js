'use strict';

var React = require('react');

var FootContent = React.createClass({

    render: function() {
        return (
            <footer>
            <hr />
                <div className="container-fluid">
                    <p className="text-right">&copy; - Vinsolutions.com</p>
                </div>
            </footer>
        );
    }
});

module.exports = FootContent;
