import { Footer } from 'components/footer';
import { Nav } from 'components/nav';
import { PageDefault } from 'components/pageDefault';
import { About } from 'pages/about';
import { Admin } from 'pages/admin';
import { Dish } from 'pages/dish';
import { Home } from 'pages/home';
import { Menu } from 'pages/menu';
import { NotFound } from 'pages/notFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export function AppRouter() {
	return (
		<main className='container'>
			<Router>
				<Nav />
				<Routes>
					<Route path='/' element={<PageDefault />}>
						<Route index element={<Home />} />
						<Route path='menu' element={<Menu />} />
						<Route path='about' element={<About />} />
						<Route path='admin' element={<Admin name='João'/>}/>
					</Route>
					<Route path='dish/:id' element={<Dish />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</Router>
		</main>
	);
}