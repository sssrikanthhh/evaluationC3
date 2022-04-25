import { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';
import { useState } from 'react';
import axios from 'axios';

export const Admin = () => {
	const { handleNewEmp } = useContext(EmployeeContext);
	const [regData, setRegData] = useState({});

	const handleChange = e => {
		const { name, value } = e.target;
		setRegData({
			...regData,
			tasks: value.split(' '),
			[name]: value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const { data } = await axios.post(
			'http://localhost:8080/employee',
			regData
		);
		handleNewEmp();
	};

	return (
		<form className='createEmployee' onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Employee Name'
				name='employee_name'
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='Employee id'
				name='employee_id'
				onChange={handleChange}
			/>
			<select name='title' onChange={handleChange}>
				<option value='intern'>Intern</option>
				<option value='Jr Software Developer'>Jr Software Developer</option>
				<option value='Sr Software Developer'>Sr Software Developer</option>
				<option value='Team Lead'>Team Lead</option>
			</select>
			<input
				type='number'
				placeholder='Salary'
				name='salary'
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='Image'
				name='image'
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='User Name'
				name='username'
				onChange={handleChange}
			/>
			<input
				type='password'
				placeholder='Password'
				name='password'
				onChange={handleChange}
			/>
			<input
				type='text'
				placeholder='Enter tasks separated by commas'
				name='tasks'
				onChange={handleChange}
			/>
			<select name='status' id='status' onChange={handleChange}>
				<option value=''>Select Status</option>
				<option value='terminated'>Terminated</option>
				<option value='working'>Working</option>
			</select>
			<select name='team' id='team' onChange={handleChange}>
				<option value=''>Select team</option>
				<option value='frontend'>Frontend</option>
				<option value='backend'>Backend</option>
				<option value='qa'>QA</option>
			</select>
			<input className='createUser' type='submit' value={'submit'} />
		</form>
	);
};
