import menu from 'data/menu.json';
import style from './Home.module.scss';
import tema from 'styles/Tema.module.scss';
import weHouse from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Idish } from 'types/dish';

export function Home() {

	let pratesRecomend = [...menu];
	pratesRecomend = pratesRecomend.sort(() => 0.5 - Math.random()).splice(0, 3);

	const navigate = useNavigate();

	function redirectionToDetails(dish: Idish) {
		navigate(`/dish/${dish.id}`,{ state: {dish} });
	}

	return (
		<section className={style['section-home']}>
			<h2 className={tema['title']}>Chef&apos;s recommendation</h2>
			<div className={style['recomendations']}>
				{pratesRecomend.map((item, id) => (
					<div key={id} className={style['recomendations__recomendation']}>
						<h3 className={style['recomendations__recomendation__title']}>{item.title}</h3>
						<p className={style['recomendations__recomendation__paragraph']}>{item.description}</p>
						<div className={style['recomendations__recomendation__footer']}>
							<img src={item.photo} alt={item.title} className={style['recomendations__recomendation__footer__img']} />
							<button
								onClick={() => redirectionToDetails(item)} 
								className={style['recomendations__recomendation__footer__btn']}>Know More!</button>
						</div>
					</div>
				))}
			</div>
			<h2 className={tema['title']}>Nossa Casa</h2>
			<div className={style['we-house']}>
				<img src={weHouse} alt='We House' className={style['we-house__img']} />
				<span className={style['we-house__adress']}>
					Rua Vaqueiro, 30156 <br /> <br /> Vila Mariana - SP
				</span>
			</div>
		</section>
	);
}