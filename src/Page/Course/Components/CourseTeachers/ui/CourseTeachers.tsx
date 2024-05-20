import { TeacherCard } from '../../../../../Entities/Teacher/ui/TeacherCard/ui';
import { Lesson } from '../../../../../Shared/lib/types/types';
import { useCourseTeachersData } from '../lib/hooks/useCourseTeachersData';
import './CourseTeachers.scss';

export default function CourseTeachers({
	lessons,
	color_theme = 'light',
}: {
	lessons: Lesson[];
	color_theme?: 'light' | 'dark';
}) {
	const teachers = useCourseTeachersData(lessons);
	return (
		<section className={`course-teachers course-teachers-${color_theme}`}>
			<h2>Преподаватели</h2>
			<ul className='course-teachers-cards'>
				{teachers.map(teacher => {
					return (
						<li key={teacher.id}>
							<TeacherCard
								name={teacher.name}
								description={teacher.description}
								direction={teacher.category}
								imgUrl={teacher.photo}
								theme={color_theme}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
