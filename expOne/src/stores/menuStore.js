'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var constants = require('../flux/constants');
var dispatcher = require('../flux/dispatcher');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var menuData = {

};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var menuStore = assign({}, EventEmitter.prototype, {
    getMenuData: function () {
        return menuData;
    },
    addChangeListener: function (callback) {
        this.on(constants.changeEventListener, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(constants.changeEventListener, callback);
    },
    emitChange: function () {
        this.emit(constants.changeEventListener);
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 dispatcher.register(function (action) {
    //console.log(action);
    switch (action.actionType) {
        case constants.eventNames.INITIALIZE_APPLICATION:
            break;
    }
    menuStore.emitChange();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = applicationStore;