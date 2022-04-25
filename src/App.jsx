import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { EmployeeList } from './components/EmployeeList';
import { EmployeeDetails } from './components/EmployeeDetails';
import { Admin } from './components/Admin';
import { ProtectedRoute } from './components/PrivateRoute';
import { Navbar } from './components/Navbar';
import { Logout } from './components/Logout';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				{/* Routes here */}
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/employees' element={<EmployeeList />} />
				<Route
					path='/employees/:id'
					element={
						<ProtectedRoute>
							<EmployeeDetails />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/admin'
					element={
						<ProtectedRoute>
							<Admin />
						</ProtectedRoute>
					}
				/>
				<Route path='/logout' element={<Logout />} />
			</Routes>
		</div>
	);
}

export default App;
