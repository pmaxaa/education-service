import { teachersURL } from '../../../Shared/lib/constants/constants';
import { Teacher } from '../../../Shared/lib/types/types';

//получить всеx учителей
export const getAllTeachers = async () => {
	const allTeachers = await fetch(`${teachersURL}/teachers`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Teacher[]>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(teachers => {
			return teachers;
		})
		.catch(error => error as Error);
	return allTeachers;
};
