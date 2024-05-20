import { useEffect } from 'react';
import useGlobalStore from '../../../../Shared/lib/store/store';
import { getAllCourses } from '../../api/action';

export function useCoursesData() {
	const { setCourses } = useGlobalStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllCourses();
			if (response) {
				if (response instanceof Error) {
					console.log(`Courses fetching error: ${response.message}`, 'error');
				} else setCourses(response);
			}
		};
		fetchData();
	}, [setCourses]);
}
