import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useParams } from 'react-router-dom';

export const EmployeeDetails = () => {
	const { id } = useParams();
	const { handleTerEmp, handleProEmp } = useContext(EmployeeContext);
	const [empolyee, setEmployee] = useState({});
	const [ediEmp, setEdiEmp] = useState({});

	useEffect(() => {
		fetchEmployee();
	}, [ediEmp]);

	const fetchEmployee = async () => {
		const { data } = await axios(`http://localhost:8080/employee/${id}`);
		setEmployee(data);
	};

	const terminateEmployee = async () => {
		setEdiEmp({
			...empolyee,
			status: 'terminated',
		});
		await axios.patch(`http://localhost:8080/employee/${id}`, ediEmp);
		handleTerEmp();
		setEmployee(ediEmp);
	};

	return (
		<div className='user_details'>
			<img className='user_image' src={empolyee.image} />
			<h4 className='user_name'>{empolyee.username}</h4>
			<span className='user_salary'>$ {empolyee.salary}</span>
			<span className='tasks'>
				{empolyee?.tasks?.map((t, i) => (
					<li className='task' key={i}>
						{t}
					</li>
				))}
			</span>
			Status: <b className='status'>{empolyee.status}</b>
			Title: <b className='title'>{empolyee.title}</b>
			{/* Show this button only if user is not already terminated (users status is working) */}
			{empolyee.status === 'terminated' ? null : (
				<button
					className='fire'
					onClick={() => {
						terminateEmployee();
					}}
				>
					Fire Employee
				</button>
			)}
			{/* Show this button only if user is not already team lead or terminated */}
			{empolyee.status !== 'terminated' || empolyee.title !== 'Team Lead' ? (
				<button className='promote'>promote</button>
			) : null}
		</div>
	);
};
