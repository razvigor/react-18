import { useContext } from 'react';
import { CityDetailStoreContext } from '../context/CityDetailContext';

export default function CityButton({ city }) {
	const { setCityId } = useContext(CityDetailStoreContext);
	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				setCityId(city.id);
			}}
			className='list-group-item list-group-item--action'
		>
			{city.name}
		</button>
	);
}
