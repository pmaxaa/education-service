import { useEffect } from 'react';
import useGlobalStore from '../../../../Shared/lib/store/store';
import { getAllCourseLessons } from '../../api/action';

export function useLessonsData(courseId: string) {
	const { lessons, setLessons } = useGlobalStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllCourseLessons(courseId);
			if (response) {
				if (response instanceof Error) {
					console.log(`Lessons fetching error: ${response.message}`, 'error');
				} else setLessons(response);
			}
		};
		fetchData();
	}, [setLessons, courseId]);

	return lessons;
}
