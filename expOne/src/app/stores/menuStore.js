'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var menuDataService = require('../services/menuDataService');

var constants = require('../flux/constants');
var dispatcher = require('../flux/dispatcher');

//////////////////////////////////////////////////////////////////////////////////////////////////////////

var menuData = { 
    items: menuDataService.mainNavigationItems,
    sideNavToggled: true
};

menuData.items[0].active = true;


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

var toggleSideNav = function () {
    menuData.sideNavToggled = !menuData.sideNavToggled;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 dispatcher.register(function (action) {
    //console.log(action);
    switch (action.actionType) {
        case constants.eventNames.INITIALIZE_APPLICATION:
            break;
        case constants.eventNames.SIDE_NAV_TOGGLE:
            toggleSideNav();
            break;
    }
    menuStore.emitChange();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = menuStore;