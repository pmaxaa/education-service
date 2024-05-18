import { coursesURL } from '../../../Shared/lib/constants/constants';
import { Course } from '../../../Shared/lib/types/types';

//получить все курсы
export const getAllCourses = async () => {
	const allCourses = await fetch(`${coursesURL}/courses/`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Course[]>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(courses => {
			return courses;
		})
		.catch(error => error as Error);
	return allCourses;
};

//получить курс по его id
export const getCourseById = async (courseId: string) => {
	const course = await fetch(`${coursesURL}/courses/${courseId}`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Course>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(course => {
			return course;
		})
		.catch(error => error as Error);
	return course;
};

//изменить у курса статус('новый'/'в процессе'/'пройден'/'в избранном') и значение поля favourite (добавить/убрать из избранного)
export const changeCourse = async (
	courseId: string,
	favourite: boolean,
	newStatus: Course['status']
) => {
	const course = await fetch(`${coursesURL}/courses/${courseId}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			favourite: favourite,
			status: newStatus,
		}),
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Course>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(course => {
			return course;
		})
		.catch(error => error as Error);
	return course;
};
