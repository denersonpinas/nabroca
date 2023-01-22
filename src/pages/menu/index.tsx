import style from './Menu.module.scss';
import tema from 'styles/Tema.module.scss';
import { Search } from './search';
import { useState } from 'react';
import { Filter } from './filter';
import { Order } from './order';
import { Itens } from './Itens';

export function Menu() {

	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState<number | null>(null);
	const [order, setOrder] = useState('');

	return (
		<section className={style['section-card']}>
			<Filter
				filter={filter}
				setFilter={setFilter}
			/>
			<div className={style['section-card__order']}>
				<h2 className={tema['title']}>Menu</h2>
				<Order
					order={order}
					setOrder={setOrder} />
				<Search
					Search={search}
					setSearch={setSearch}
				/>
			</div>
			<Itens
				search={search}
				filter={filter}
				order={order}
			/>
		</section>
	);
}