'use strict';

var dispatcher = require('../flux/dispatcher');
var constants = require('../flux/constants');

module.exports = {

    initializeApplication: function() {
        dispatcher.dispatch({
            actionType: constants.eventNames.INITIALIZE_APPLICATION
        });
    }
};

