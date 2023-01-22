import classNames from 'classnames';
import style from './DescriptionDish.module.scss';
import { Idish } from 'types/dish';
import { useNavigate } from 'react-router-dom';

export function DescriptionDish(dish : Idish) {
	const navigate = useNavigate();

	return (
		<div 
			onClick={() => navigate(`/dish/${dish.id}`)}
			className={style['item']}>
			<div className={style['item__image']}>
				<img src={`${dish.photo}`} alt={'Imagem de ' + dish.title} />
				<span className={classNames({
					[style['item__type']]: true,
					[style[`item__type__${dish.category.label.toLowerCase()}`]]: true
				})}>{dish.category.label}</span>
			</div>
			<div className={style['item__descriptions']}>
				<h2 className={style['item__title']}>{dish.title}</h2>
				<p className={style['item__text']}>{dish.description}</p>
				<div className={style['item__complements']}>
					<span className={style['item__portion']}> Serves {dish.serving} people{dish.serving === 1 ? '' : 's'} </span>
					<span className={style['item__weight']}>{dish.size}g</span>
					<span className={style['item__price']}> R$ {dish.price.toFixed(2)} </span>
				</div>
			</div>
		</div>
	);
}