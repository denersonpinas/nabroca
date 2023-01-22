import tema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/header';

export function PageDefault() {
	return (
		<>
			<Header />	
			<main className={tema['container']}>
				<Outlet />
			</main>			
		</>
	);
}