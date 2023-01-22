import style from './Itens.module.scss';
import Iten from 'data/menu.json';
import { useEffect, useState } from 'react';
import { DescriptionDish } from 'components/descriptionDish';

interface Props {
	search: string,
	filter: null | number,
	order: string
}

export function Itens({ filter, order, search }: Props) {

	const [list, setList] = useState(Iten);

	function testSearch(title: string) {
		const regex = new RegExp(search, 'i');
		return regex.test(title);
	}

	function testFilter(id: number) {
		if (filter !== null) return filter === id;
		return true;
	}

	function sortPropertyAscending(newList: typeof Iten, option: 'size' | 'serving' | 'price') {
		return newList.sort((a, b) => a[option] > b[option] ? 1 : -1);
	}

	function ordering(newList: typeof Iten) {
		switch (order) {
		case 'portion':
			return sortPropertyAscending(newList, 'size');

		case 'num_people':
			return sortPropertyAscending(newList, 'serving');

		case 'price':
			return sortPropertyAscending(newList, 'price');

		default:
			return newList;
		}
	}

	useEffect(() => {
		const newList = Iten.filter(option => testSearch(option.title) && testFilter(option.category.id));
		setList(ordering(newList));

	}, [search, filter, order]);

	return (
		<div className={style['section-itens']}>
			{list.map((item) => (
				<DescriptionDish
					key={item.id}
					{...item} />
			))}
		</div>
	);
}