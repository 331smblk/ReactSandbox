
'use strict';

var keymirror = require('keymirror');

var eventNames = keymirror({
    INITIALIZE_APPLICATION: null,
    SIDE_NAV_TOGGLE: null
});

module.exports = {
    eventNames: eventNames,
    changeEventListener: 'change'
};  

