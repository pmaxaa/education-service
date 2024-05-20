import { NavLink } from 'react-router-dom';
import { CourseCard } from '../../../../Entities/Course/ui/CourseCard/ui';
import Button from '../../../../Shared/UIKit/Button/Button';
import useGlobalStore from '../../../../Shared/lib/store/store';
import './style.scss';

interface CoursesListProps {
	theme?: 'light' | 'dark';
}
export const CoursesList = ({ theme = 'light' }: CoursesListProps) => {
	const { courses } = useGlobalStore();
	let newCourses;
	if (courses.length > 10) newCourses = courses.slice(0, 10);
	else newCourses = [...courses];
	return (
		<section className={'coursesList coursesList_theme_' + theme}>
			<div className='coursesList__wrap'>
				<h2 className='coursesList__head'>Направления обучения</h2>
				<ul className='coursesList__list'>
					{newCourses.map(course => {
						return (
							<li key={course.title} className='coursesList__item'>
								<CourseCard {...course} />
							</li>
						);
					})}
				</ul>
				<NavLink to={'/catalog'} className='coursesList__btn'>
					<Button label='В каталог' color_theme={theme} />
				</NavLink>
			</div>
		</section>
	);
};
