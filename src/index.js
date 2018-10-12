import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import HttpsRedirect from 'react-https-redirect';

ReactDOM.render((
	<Router>
		<App />
	</Router>
), document.getElementById('root'));

//registerServiceWorker();
