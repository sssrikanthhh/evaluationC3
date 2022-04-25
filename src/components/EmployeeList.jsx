import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		fetchEmployees();
	}, []);

	const fetchEmployees = async () => {
		const { data } = await axios('http://localhost:8080/employee');
		setEmployees(data);
	};

	return (
		<div className='list_container'>
			{/* On clicking this card anywhere, user goes to user details */}
			{employees.map(emp => (
				<Link key={emp.id} to={`./${emp.id}`}>
					<div className='employee_card'>
						<img
							className='employee_image'
							src={emp.image}
							alt={emp.employee_name}
						/>
						<span className='employee_name'>{emp.employee_name}</span>
						<span className='employee_title'>{emp.title}</span>
					</div>
				</Link>
			))}
		</div>
	);
};
