import { CourseCard } from '../../../../Entities/Course/ui/CourseCard/ui';
import useGlobalStore from '../../../../Shared/lib/store/store';
import { filterStateType } from '../Filter/ui';
import './style.scss';

interface CoursesListProps {
	textFilter: string;
	currentCategory: string;
	filterState: filterStateType;
	theme?: 'light' | 'dark';
	className?: string;
}
export const CoursesList = ({
	textFilter,
	currentCategory,
	filterState,
	className,
	theme = 'light',
}: CoursesListProps) => {
	const { courses } = useGlobalStore();

	const filterCoursesItem = () => {
		return courses.filter(course => {
			if (
				currentCategory !== '' &&
				!course.categories.includes(currentCategory)
			) {
				return false;
			}

			if (
				textFilter !== '' &&
				!course.title
					.toLocaleLowerCase()
					.trim()
					.includes(textFilter.toLocaleLowerCase().trim()) &&
				!course.description
					.toLocaleLowerCase()
					.trim()
					.includes(textFilter.toLocaleLowerCase().trim())
			) {
				return false;
			}

			if (
				filterState.cost.length !== 0 &&
				!filterState.cost.includes(course.cost)
			) {
				return false;
			}

			if (
				filterState.format.length !== 0 &&
				!filterState.format.includes(course.format)
			) {
				return false;
			}

			if (
				filterState.level.length !== 0 &&
				!filterState.level.includes(course.level)
			) {
				return false;
			}

			if (filterState.status.length !== 0) {
				for (let k = 0; k < filterState.status.length; k++) {
					if (
						filterState.status[k] === 'пройден' &&
						course.status !== 'пройден'
					)
						return false;
					if (
						filterState.status[k] === 'в процессе' &&
						course.status !== 'в процессе'
					)
						return false;
					if (filterState.status[k] === 'новый' && course.status !== 'новый')
						return false;
					if (filterState.status[k] === 'в избранном' && !course.favorite)
						return false;
				}
			}

			if (
				filterState.duration.length !== 0 &&
				!(Math.max(...filterState.duration) > course.duration_months)
			) {
				return false;
			}
			return true;
		});
	};
	return (
		<section
			className={
				'CoursesList CoursesList_theme_' +
				theme +
				(className ? ' ' + className : '')
			}
		>
			<p className='CoursesList__info'>
				{(textFilter === ''
					? 'Найдено: '
					: `Найдено по запросу "${textFilter}": `) +
					filterCoursesItem().length}
			</p>
			<ul className='CoursesList__list'>
				{filterCoursesItem().map(course => {
					return (
						<li key={course.id} className='CoursesList__item'>
							{
								<CourseCard
									{...course}
									isSelected={
										course.status === 'в процессе' ||
										course.status === 'пройден'
									}
									theme={theme}
								/>
							}
						</li>
					);
				})}
			</ul>
		</section>
	);
};
