import { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [isAuth, setIsAuth] = useState(false);

	const handleAuth = sta => {
		setIsAuth(sta);
	};

	return (
		<AuthContext.Provider value={{ isAuth, handleAuth }}>
			{children}
		</AuthContext.Provider>
	);
};
