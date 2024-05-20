import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { useLessonsData } from '../../../Entities/Lesson/lib/hooks/useLessonsData';
import useGlobalStore from '../../../Shared/lib/store/store';
import { MainHeader } from '../../../Widgets/MainHeader/ui';
import CourseProgram from '../Components/CourseProgram/ui/CourseProgram';
import CourseTeachers from '../Components/CourseTeachers/ui/CourseTeachers';

interface courseParams {
	id: string;
}
export const courseLoader = ({ params }: LoaderFunctionArgs<courseParams>) => {
	return params;
};
export const CoursePage = () => {
	//получили id курса из адресной строки, потом в useEffect нужно будет подтянуть данные о курсе
	const { theme, changeTheme } = useGlobalStore();
	const { id } = useLoaderData() as courseParams;
	const lessons = useLessonsData(id);

	return (
		<>
			<MainHeader theme={theme} setTheme={changeTheme} />
			<main>
				<CourseProgram lessons={lessons} color_theme={theme} />
				<CourseTeachers lessons={lessons} color_theme={theme} />
			</main>
			;
		</>
	);
};
