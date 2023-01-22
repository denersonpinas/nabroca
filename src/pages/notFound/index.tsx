import style from './NotFound.module.scss';
import tema from 'styles/Tema.module.scss';
import { ReactComponent as NotFoundImage } from 'assets/notFound/not_found.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export function NotFound() {
	const navigate = useNavigate();

	return (
		<div className={classNames({
			[style['container']]: true,
			[tema['container']]: true,
		})}>
			<div className={style['goBack']}>
				<button onClick={() => navigate(-1)}>
					{'< Go Back'}
				</button>
			</div>
			<NotFoundImage />
		</div>
	);
}