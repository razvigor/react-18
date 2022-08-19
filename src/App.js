import { Suspense, useContext } from 'react';
import './App.css';
import CityDetail from './components/CityDetail';
import CityDisplayCount from './components/CityDisplayCount';
import CityList from './components/CityList';

import { CityListStoreProvider } from './context/CityListStoreContext';
import { DisplayCountProvider } from './context/DisplayCountContext';
import { DisplayCountContext } from './context/DisplayCountContext';

function App() {
	const displayCount = useContext(DisplayCountContext);
	console.log(displayCount);
	return (
		<DisplayCountProvider displayCount={displayCount}>
			<CityDisplayCount />
			<CityListStoreProvider>
				<Suspense fallback={<div>Loading...</div>}>
					<CityList>
						<Suspense fallback={<div>Loading...</div>}>
							<CityDetail />
						</Suspense>
					</CityList>
				</Suspense>
			</CityListStoreProvider>
		</DisplayCountProvider>
	);
}

export default App;
