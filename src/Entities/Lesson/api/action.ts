import { coursesURL } from '../../../Shared/lib/constants/constants';
import { Lesson } from '../../../Shared/lib/types/types';

export const getAllCourseLessons = async (courseId: string) => {
	const allLessons = await fetch(`${coursesURL}/courses/${courseId}/lessons`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Lesson[]>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(lessons => {
			return lessons;
		})
		.catch(error => error as Error);
	return allLessons;
};

export const getLessonById = async (lessonId: string) => {
	const lesson = await fetch(`${coursesURL}/lessons/${lessonId}`, {
		method: 'GET',
		headers: { 'content-type': 'application/json' },
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Lesson>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(lesson => {
			return lesson;
		})
		.catch(error => error as Error);
	return lesson;
};

export const completeLesson = async (lessonId: string) => {
	const lesson = await fetch(`${coursesURL}/lessons/${lessonId}`, {
		method: 'PUT',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			completed: true,
		}),
	})
		.then(response => {
			if (response.ok) {
				return response.json() as Promise<Lesson>;
			} else throw new Error(response.status + ' ' + response.statusText);
		})
		.then(lesson => {
			return lesson;
		})
		.catch(error => error as Error);
	return lesson;
};
