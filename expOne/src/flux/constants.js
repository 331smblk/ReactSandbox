
'use strict';

var keymirror = require('keymirror');

var eventNames = keymirror({
    INITIALIZE_APPLICATION: null
});

module.exports = {
    eventNames: eventNames,
    changeEventListener: 'change'
};  

