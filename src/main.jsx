import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { EmployeeContextProvider } from './contexts/EmployeeContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthContextProvider>
				<EmployeeContextProvider>
					<App />
				</EmployeeContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
