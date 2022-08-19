import { useContext } from 'react';
import { DisplayCountContext } from '../context/DisplayCountContext';

export default function CityDisplayCount() {
	const { displayCount, setDisplayCount } = useContext(DisplayCountContext);
	return (
		<div className='btn-group' role='group' aria-label='Example'>
			{[3, 5, 10].map((btnCnt) => {
				return (
					<button
						type='button'
						key={btnCnt}
						className={
							displayCount === btnCnt
								? 'btn btn-secondary active'
								: 'btn btn-secondary'
						}
						onClick={() => {
							setDisplayCount(btnCnt);
						}}
					>
						{btnCnt}
					</button>
				);
			})}
		</div>
	);
}
