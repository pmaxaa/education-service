import { LoaderFunctionArgs, NavLink, useLoaderData } from 'react-router-dom';
import { changeCourse } from '../../../Entities/Course/api/action';
import Button from '../../../Shared/UIKit/Button/Button';
import Cover from '../../../Shared/UIKit/Cover/Cover';
import LikeButton from '../../../Shared/UIKit/LikeButton/LikeButton';
import useGlobalStore from '../../../Shared/lib/store/store';
import { MainHeader } from '../../../Widgets/MainHeader/ui';
import CourseProgram from '../Components/CourseProgram/ui/CourseProgram';
import CourseQuestions from '../Components/CourseQuestions/ui/CourseQuesstions';
import CourseTeachers from '../Components/CourseTeachers/ui/CourseTeachers';

interface courseParams {
	id: string;
}
export const courseLoader = ({ params }: LoaderFunctionArgs<courseParams>) => {
	return params;
};
export const CoursePage = () => {
	const { theme, changeTheme, editCourse } = useGlobalStore();
	const { id } = useLoaderData() as courseParams;
	const course = useGlobalStore(state =>
		state.courses.find(course => course.id === id)
	);
	const lessons = useGlobalStore(state =>
		state.lessons.filter(lesson => lesson.courseId === id)
	);
	let notCompletedLesson = '';
	if (lessons.length > 0) {
		notCompletedLesson = (
			lessons.find(lesson => !lesson.completed) || lessons[lessons.length]
		).id;
	}

	const handleLikeChange = () => {
		const likeCourse = async () => {
			if (course) {
				const newCourse = await changeCourse(
					id,
					!course.favorite,
					course.status
				);
				if (newCourse) {
					if (newCourse instanceof Error)
						console.log(`Editing course error: ${newCourse.message}`, 'error');
					else {
						editCourse(newCourse);
					}
				}
			}
		};
		likeCourse();
	};

	if (course)
		return (
			<>
				<MainHeader theme={theme} setTheme={changeTheme} />
				<main>
					<Cover
						title={course.title}
						subtitle={course.description}
						page='course'
					>
						<NavLink to={`/lesson/${notCompletedLesson}`}>
							<Button
								label='Продолжить курс'
								size='large'
								disabled={notCompletedLesson === ''}
							/>
						</NavLink>
						<LikeButton
							button_size='default'
							isLiked={course.favorite}
							onChange={handleLikeChange}
						/>
					</Cover>
					<CourseProgram lessons={lessons} color_theme={theme} />
					<CourseTeachers lessons={lessons} color_theme={theme} />
					<CourseQuestions courseId={id} theme={theme} />
				</main>
			</>
		);
	else return <>Такого курса не существует</>;
};
