'use strict';

var React = require('react');
var _ = require('lodash');
var Router = require('react-router');

var BreadCrumbItem = require('./breadCrumbItem');

var BreadCrumbs = React.createClass({
    
    mixins: [ Router.State ],
    
    sideNavToggle: function(){
        menuActions.sideNavToggle();
    },

    render: function() {
        
        console.log(this.getRoutes());
        
        return (
            
            <div className="row">
                <span className="hamburger-toggle pull-left" onClick={this.sideNavToggle} >
                    <i className="fa fa-bars"></i>
                </span>
            
                <ol className="breadcrumb pull-left">
            
                    {this.props.menuData.items.map(function(menuItem, index) {
                        return (
                            <BreadCrumbItem key={index} menuItem={menuItem} />
                        );
                    })}
    
                </ol>
            </div>
        );
    }
});

module.exports = BreadCrumbs;
