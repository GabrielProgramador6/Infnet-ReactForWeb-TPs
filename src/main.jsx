import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { ContextProvider } from './context/Context';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
