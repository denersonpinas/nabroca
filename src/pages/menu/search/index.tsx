import {CgSearch} from 'react-icons/cg';
import search from './search.module.scss';

interface Props {
    Search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function Search( {Search, setSearch} : Props ) {
	return(
		<div className={search['search']}>
			<input 
				type="search" 
				name="search" 
				id="search"
				value={Search}
				onChange={(e) => setSearch(e.target.value)}
				className={search['search__input-search']}
				placeholder="Search Here!"
			/>
			<label htmlFor="search">
				<CgSearch
					size={20}
					color="#101010"
				/>
			</label>
		</div>
	);
}