import { createContext, useContext, useState, useEffect } from 'react';
import { CityListStoreContext } from './CityListStoreContext';
import { fetchCityDetailData } from '../components/dataApi/fetchCityDetailData';

export const CityDetailStoreContext = createContext();

function CityDetailStoreProvider({ initialCityId, children }) {
	const [resourceCityDetail, setResourceCityDetail] = useState(
		fetchCityDetailData(initialCityId)
	);

	const { getCities } = useContext(CityListStoreContext);
	const cities = getCities();

	useEffect(() => {
		setResourceCityDetail(fetchCityDetailData(cities[0].id));
	}, [cities]);

	const setCityId = (cityId) => {
		setResourceCityDetail(fetchCityDetailData(cityId));
	};

	const getCityInfo = resourceCityDetail.cityInfo.read;
	const getCityStats = resourceCityDetail.cityStats.read;
	const getCityLocation = resourceCityDetail.cityLocation.read;
	const contextValue = {
		getCityInfo,
		getCityStats,
		getCityLocation,
		setCityId,
	};
	return (
		<CityDetailStoreContext.Provider value={contextValue}>
			{children}
		</CityDetailStoreContext.Provider>
	);
}

export { CityDetailStoreProvider };
