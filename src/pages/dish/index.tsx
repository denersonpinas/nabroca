import style from './Dish.module.scss';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import menu from 'data/menu.json';
import { DescriptionDish } from 'components/descriptionDish';
import { NotFound } from 'pages/notFound';
import { PageDefault } from 'components/pageDefault';

export function Dish() {

	const { id } = useParams();
	const navigate = useNavigate();
	const dish = menu.find(item => item.id === Number(id));
	if (!dish) {
		return <NotFound />;
	}

	return (
		<Routes>
			<Route path='/' element={<PageDefault />}>
				<Route index element={
					<section className={style['section-dish']}>
						<button
							onClick={() => navigate(-1)}
							className={style['btn-goBack']}>
							{'< Go Back'}
						</button>
						<DescriptionDish {...dish} />
					</section>
				} />
			</Route>
		</Routes>
	);
}