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

        <DefaultRoute name="AppDefault" handler={require('./components/crm/crmDashboard')} />
                                                      
        <Route name="crm" path="/crm" handler={require('./components/crm/crmDashboard')} >
            <Route name="CRM Calendar" path="/crm/calendar" handler={require('./components/crm/crmCalendar')} />        
        </Route>                                           
                                                      
                  
        <Route name="campaigns" path="/campaigns" handler={require('./components/campaigns/campaignsDashboard')} /> 
        <Route name="desking" path="/desking" handler={require('./components/desking/deskingDashboard')} />    
        <Route name="inventory" path="/inventory" handler={require('./components/inventory/inventoryDashboard')} />    
        <Route name="reporting" path="/reporting"handler={require('./components/reporting/reportingDashboard')} />    
        <Route name="service" path="/service" handler={require('./components/service/serviceDashboard')}>
            <Route name="Service Calendar" path="/service/calendar" handler={require('./components/service/serviceCalendar')} />        
        </Route>    
        <Route name="websites" path="/websites" handler={require('./components/websites/websitesDashboard')} />  

        
        
    </Route>
);
