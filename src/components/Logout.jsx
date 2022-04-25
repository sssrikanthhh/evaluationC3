import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

export const Logout = () => {
	const { handleAuth } = useContext(AuthContext);
	// log user out. it's just an inmemory value in context api
	handleAuth(false);
	return Navigate('/');
};
