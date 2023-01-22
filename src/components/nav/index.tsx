import style from './Nav.module.scss';
import {ReactComponent as Logo} from 'assets/newLogo.svg';
import { CgFacebook, CgInstagram, CgMenu, CgPhone } from 'react-icons/cg';
import { Link } from 'react-router-dom';

export function Nav() {
	const routes = [{
		label: 'HOME',
		to: '/'
	},{
		label: 'MENU',
		to: '/menu'
	},{
		label: 'ABOUT',
		to: '/about'
	},{
		label: 'ADMIN',
		to: '/admin'
	}];

	return (
		<nav className={style['menu-nav']}>
			<Logo className={style['menu-nav__logo']} />
			<ul className={style['menu-nav__nav']}>
				{routes.map((route, id) => (
					<Link key={id} to={route.to} className={style['menu-nav__nav__item']}>
						<li>{route.label}</li>						
					</Link>
				))}
			</ul>
			<div className={style['menu-nav__contact']}>
				<div className={style['menu-nav__contact__icons']}>
					<CgFacebook size={20} className={style['menu-nav__contact__icons__icon']} />
					<CgInstagram size={20} className={style['menu-nav__contact__icons__icon']}/>
				</div>				
				<button className={style['menu-nav__contact__btn']}>
					<CgPhone size={20}  className={style['menu-nav__contact__btn__icon']}/>
					Order Here!
				</button>
			</div>
			<CgMenu size={35} className={style['menu-nav__mobile']}/>
		</nav>
	);
}