import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useGlobalStore from '../../../Shared/lib/store/store';
import { MainHeader } from '../../../Widgets/MainHeader/ui';
import { CategoriesList } from '../Components/CategoriesList/ui';
import { CoursesList } from '../Components/CoursesList/ui';
import { Filter, filterStateType } from '../Components/Filter/ui';
import './style.scss';

export const CatalogPage = () => {
	const location = useLocation();
	console.log('CatalogPage state', location.state);

	const [CurrentCategory, setCurrentCategory] = useState<string>('');
	const [TextFilter, setTextFilter] = useState<string>('');
	const { theme, changeTheme } = useGlobalStore();

	const [FilterState, setFilterState] = useState<filterStateType>({
		cost: [],
		level: [],
		duration: [],
		format: [],
		status: [],
	});

	return (
		<>
			<MainHeader
				theme={theme}
				setTheme={changeTheme}
				textFilter={TextFilter}
				setTextFilter={setTextFilter}
			/>
			<main className={'catalogPage__main catalogPage__main_theme_' + theme}>
				<div className='catalogPage__mainWrap'>
					<div className='catalogPage__helpBlock'></div>
					<CategoriesList
						currentCategory={CurrentCategory}
						setCurrentCategory={setCurrentCategory}
						theme={theme}
						className='catalogPage__categoris'
					/>
					<Filter
						theme={theme}
						filterState={FilterState}
						setFilterState={setFilterState}
						className='catalogPage__filter'
					/>
					<CoursesList
						currentCategory={CurrentCategory}
						textFilter={TextFilter}
						filterState={FilterState}
						theme={theme}
						className='catalogPage__courses'
					/>
				</div>
			</main>
		</>
	);
};
