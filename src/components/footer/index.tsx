import style from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

export function Footer() {
	return (
		<footer className={style['footer']}>
			<Logo className={style['footer__logo']} />
		</footer>
	);
}