import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {
	//  use reqres to log user in.
	const { handleAuth } = useContext(AuthContext);
	const [loginData, setLoginData] = useState({});

	const navigate = useNavigate();

	const handleChange = e => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};
	const handleSubmit = async e => {
		e.preventDefault();
		const { data } = await axios.post(
			'https://reqres.in/api/register',
			loginData
		);
		if (data.token) {
			navigate(-1, { replace: true });
			handleAuth(true);
		}
	};

	return (
		<form className='loginform' onSubmit={handleSubmit}>
			<input
				name='username'
				type='text'
				placeholder='Enter username'
				className='login_username'
				onChange={handleChange}
			/>
			<input
				name='password'
				type='text'
				placeholder='Enter password'
				className='login_password'
				onChange={handleChange}
			/>
			<input type='submit' value='SIGN IN' className='login_submit' />
		</form>
	);
};
