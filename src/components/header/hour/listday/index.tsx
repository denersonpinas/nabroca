import style from './Listdays.module.scss';
import Days from '../days.json';
import classNames from 'classnames';

type IOpcao = typeof Days[0]

interface Props {
    day: number | null,
    setDay: React.Dispatch<React.SetStateAction<number | null>>
}

export function ListDay({ day, setDay }: Props) {

	function selectDay(option : IOpcao) {
		if(day == option.id) return setDay(null);
		return setDay(option.id);
	}

	return (
		<>
			{Days.map((item) => (
				<li
					className={classNames({
						[style['item']]: true,
						[style['item--active']] : day === item.id
					})}
					onClick={() => selectDay(item)}
					key={item.id}>{item.day}</li>
			))}
		</>
	);
}