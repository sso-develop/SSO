import React from 'react';
import ReactDOM from 'react-dom';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import 'antd/dist/antd.css';
import './index.css';
import './app.css';

import registerServiceWorker from './registerServiceWorker';
import App from './App';


import SystemConfig from './component/SystemConfig.jsx';
import UserProfile from './component/UserProfile.jsx';
import AppManager from './component/AppManager.jsx';
import Permission from './component/Permission.jsx';
import UserManager from './component/UserManager.jsx';
import AllotPermission from './component/AllotPermission.jsx';
import PermissionApply from './component/PermissionApply.jsx'

const pageRoute = ( 
    <Router>
	    <App>
	        <Route exact path="/" component={UserManager} />
			<Route path="/systemConfig" component={SystemConfig} />
			<Route path="/userProfile" component={UserProfile} />
			<Route path="/userManager" component={UserManager} />
	        <Route path="/userManager" component={UserManager} />
	        <Route path="/appManager" component={AppManager} />
	        <Route path="/permission" component={Permission} />
			<Route path="/permissionApply" component={PermissionApply} />
	        <Route path="/allotPermission/:id" component={AllotPermission} />
	        
	    </App>
  </Router>
); 
ReactDOM.render(pageRoute, document.getElementById('root'));
registerServiceWorker();
