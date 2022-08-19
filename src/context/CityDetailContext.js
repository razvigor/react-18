import { createContext, useContext, useState } from 'react';
import { CityListStoreContext } from './CityListStoreContext';
import { fetchCityDetailData } from '../components/dataApi/fetchCityDetailData';

export const CityDetailStoreContext = createContext();

function CityDetailStoreProvider({ initialCityId, children }) {
	const [resourceCityDetail, setResourceCityDetail] = useState(
		fetchCityDetailData(initialCityId)
	);
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
