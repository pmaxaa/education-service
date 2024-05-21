import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import Cover from '../../../Shared/UI/Cover/Cover';
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
	const { theme, changeTheme } = useGlobalStore();
	const { id } = useLoaderData() as courseParams;
	const course = useGlobalStore(state =>
		state.courses.find(course => course.id === id)
	);
	const lessons = useGlobalStore(state =>
		state.lessons.filter(lesson => lesson.courseId === id)
	);

	if (course)
		return (
			<>
				<MainHeader theme={theme} setTheme={changeTheme} />
				<main>
					<Cover
						title={course.title}
						subtitle={course.description}
						page='course'
					/>
					<CourseProgram lessons={lessons} color_theme={theme} />
					<CourseTeachers lessons={lessons} color_theme={theme} />
					<CourseQuestions courseId={id} theme={theme} />
				</main>
			</>
		);
	else return <></>;
};
