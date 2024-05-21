import { coursesURL } from '../../../Shared/lib/constants/constants';
import { Course } from '../../../Shared/lib/types/types';

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

export const changeCourse = async (
	courseId: string,
	favorite: boolean,
	newStatus: Course['status']
) => {
	const course = await fetch(`${coursesURL}/courses/${courseId}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			favorite: favorite,
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
