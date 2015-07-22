'use strict';

var React = require('react');

//Reference router related functions
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var Redirect = Router.Redirect;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

//Declare routes
//note that the path can be left out of these when path and name match.
module.exports = (
    <Route name="app" path="/" handler={require('./components/application')}>

        <DefaultRoute name="crm" handler={require('./components/crm/crmMain')} />
                      
        <Route name="campaigns" handler={require('./components/campaigns/campaignsMain')} /> 
        <Route name="desking" handler={require('./components/desking/deskingMain')} />    
        <Route name="inventory" handler={require('./components/inventory/inventoryMain')} />    
        <Route name="reporting" handler={require('./components/reporting/reportingMain')} />    
        <Route name="service" handler={require('./components/service/serviceMain')} />    
        <Route name="websites" handler={require('./components/websites/websitesMain')} />  

    </Route>
);
