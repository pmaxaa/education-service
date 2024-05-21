import { useEffect } from 'react';
import useGlobalStore from '../../../../Shared/lib/store/store';
import { getAllLessons } from '../../api/action';

export function useLessonsData() {
	const { setLessons } = useGlobalStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllLessons();
			if (response) {
				if (response instanceof Error) {
					console.log(`Lessons fetching error: ${response.message}`, 'error');
				} else setLessons(response);
			}
		};
		fetchData();
	}, [setLessons]);
}
