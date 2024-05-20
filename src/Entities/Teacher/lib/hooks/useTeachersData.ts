import { useEffect } from 'react';
import useGlobalStore from '../../../../Shared/lib/store/store';
import { getAllTeachers } from '../../api/action';

export function useTeachersData() {
	const { setTeachers } = useGlobalStore();
	useEffect(() => {
		const fetchData = async () => {
			const response = await getAllTeachers();
			if (response) {
				if (response instanceof Error) {
					console.log(`Teachers fetching error: ${response.message}`, 'error');
				} else setTeachers(response);
			}
		};
		fetchData();
	}, [setTeachers]);
}
