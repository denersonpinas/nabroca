import { Navigate } from 'react-router-dom';
import User from './users.json';

export function Admin({name} : {name: string}) {

	const authorized = User.find(user => user.user === name);
    
	if(!authorized) {
		return <Navigate to={'/'}/>;
	}

	return(
		<h1>Olá, {name}</h1>
	);
}