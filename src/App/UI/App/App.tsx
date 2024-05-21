import { RouterProvider } from 'react-router-dom';
import { useCoursesData } from '../../../Entities/Course/lib/hooks/useCoursesData';
import { useLessonsData } from '../../../Entities/Lesson/lib/hooks/useLessonsData';
import { useTeachersData } from '../../../Entities/Teacher/lib/hooks/useTeachersData';
import { router } from '../../Routes/routes';
import './App.scss';

function App() {
	useCoursesData();
	useTeachersData();
	useLessonsData();
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
