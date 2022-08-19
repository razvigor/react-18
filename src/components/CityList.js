import React, { useContext, Fragment } from 'react';
import { CityListStoreContext } from '../context/CityListStoreContext';
import { CityDetailStoreProvider } from '../context/CityDetailContext';
import CityButton from './CityButton';

const CityList = ({ children }) => {
	const { getCities, isPending } = useContext(CityListStoreContext);

	const cities = getCities();
	return (
		<CityDetailStoreProvider initialCityId={cities[0].id}>
			<div className='container'>
				<h1>React 18 with Suspense</h1>
				<div className='row'>
					<div className='col-3'>
						<ul className='list-group city--list'>
							<li className='list-group-item city--header'>
								City List {isPending && 'updating...'}
							</li>
							{cities.map((rec) => (
								<Fragment key={rec.id}>
									<CityButton city={rec} />
								</Fragment>
							))}
						</ul>
					</div>
					<div className='col-9'>
						<div className='city--details'>
							<div className='list-group-item city--header'>City Details</div>
							{children}
						</div>
					</div>
				</div>
			</div>
		</CityDetailStoreProvider>
	);
};

export default CityList;
