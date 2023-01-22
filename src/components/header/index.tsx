import style from './Header.module.scss';

export function Header() {
	return (
		<>
			<section className={style['section-header']}>
				<span className={style['section-header__info']}>
					FAST FOOD BURGERS
				</span>
				<h2 className={style['section-header__title']}>
					THE HOUSE OF THE CODE AND THE MASS
				</h2>
				<button className={style['section-header__btn']}>Know More!</button>
			</section>
		</>
	);
}