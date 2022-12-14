import {
	createContext,
	useContext,
	useState,
	useEffect,
	useTransition,
} from 'react';
import { fetchCityListData } from '../components/dataApi/fetchCityListData';
import { DisplayCountContext } from './DisplayCountContext';

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children }) {
	const { displayCount } = useContext(DisplayCountContext);
	const [isPending, startTransition] = useTransition();
	const [resource, setResource] = useState(fetchCityListData(displayCount));

	useEffect(() => {
		startTransition(() => {
			setResource(fetchCityListData(displayCount));
		});
	}, [displayCount]);

	const getCities = resource?.cities.read;

	const contextValue = {
		isPending,
		getCities,
	};

	return (
		<CityListStoreContext.Provider value={contextValue}>
			{children}
		</CityListStoreContext.Provider>
	);
}
export { CityListStoreProvider };
