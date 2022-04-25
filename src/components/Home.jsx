import { useState, useEffect, useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import axios from 'axios';

export const Home = () => {
	const { terEmp, proEmp, newEmp } = useContext(EmployeeContext);
	// create statistics for user.
	// get Total user count from DB,
	// other fields are in memory values stored in context API.
	// they will reset to 0
	// if page gets refreshed

	// thins to store in context api
	//   total: get from db,
	//   terminated: 0, // inc when user in terminated
	//   promoted: 0,// inc when user in promoted
	//   total_new: 0,// inc when a new user in created

	const [totalEmp, setTotalEmp] = useState(0);

	useEffect(() => {
		fetchEmpTotal();
	}, []);

	const fetchEmpTotal = async () => {
		const { data } = await axios('http://localhost:8080/employee');
		setTotalEmp(data?.length);
	};

	return (
		<>
			<h3 className='welcome'>Welcome To employee management system</h3>
			<div className='home'>
				<span>Stats</span>
				<div>
					Total Employees: <span className='totalemp'>{totalEmp}</span>
				</div>
				<div>
					Total Terminated: <span className='total_terminated'>{terEmp}</span>
				</div>
				<div>
					Total Promoted: <span className='total_promoted'>{proEmp}</span>
				</div>
				<div>
					Total New: <span className='total_new'>{newEmp}</span>
				</div>
			</div>
		</>
	);
};
