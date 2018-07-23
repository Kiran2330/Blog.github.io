import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/styles.css';
import './css/slick.css';
import './css/slick-theme.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<App />, 
	document.getElementById('root')
);
registerServiceWorker();
