import { useState, createContext } from 'react';

export const EmployeeContext = createContext();

export const EmployeeContextProvider = ({ children }) => {
	const [terEmp, setTerEmp] = useState(0);
	const [proEmp, setProEmp] = useState(0);
	const [newEmp, setNewEmp] = useState(0);

	const handleTerEmp = () => {
		setTerEmp(pre => pre + 1);
	};

	const handleProEmp = () => {
		setProEmp(pre => pre + 1);
	};

	const handleNewEmp = () => {
		setNewEmp(pre => pre + 1);
	};

	return (
		<EmployeeContext.Provider
			value={{
				terEmp,
				proEmp,
				newEmp,
				handleTerEmp,
				handleProEmp,
				handleNewEmp,
			}}
		>
			{children}
		</EmployeeContext.Provider>
	);
};
