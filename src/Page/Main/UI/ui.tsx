import { NavLink } from 'react-router-dom';
import Cover from '../../../Shared/UI/Cover/Cover';
import Button from '../../../Shared/UIKit/Button/Button';
import useGlobalStore from '../../../Shared/lib/store/store';
import { MainHeader } from '../../../Widgets/MainHeader/ui';
import { CoursesList } from '../Component/CoursesList/ui';
import { InfoList } from '../Component/InfoList/ui';
import { QuestionsList } from '../Component/QuestionsList/ui';
import { TeachersList } from '../Component/TeachersList/ui';
import './style.scss';

export const MainPage = () => {
	const { theme, changeTheme } = useGlobalStore();
	return (
		<>
			<MainHeader theme={theme} setTheme={changeTheme} />
			<main className={'mainPage mainPage_theme_' + theme}>
				<Cover
					title='Бесконечные 
						возможности
						учиться онлайн'
					subtitle='С нами можно учиться дистанционно топовым профессиям'
					page='main'
				>
					<NavLink to={'/catalog'}>
						<Button theme='filled' size='large' label='В каталог' />
					</NavLink>
				</Cover>
				<InfoList theme={theme} />
				<CoursesList theme={theme} />
				<TeachersList theme={theme} />
				<QuestionsList theme={theme} />
			</main>
		</>
	);
};
