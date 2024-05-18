import { create } from 'zustand';
import { Course, Lesson } from '../types/types';

//к вечеру будут функции для изменения статусов уроков и курсов ()
type CourseState = {
	courses: Course[];
	setCourses: (courses: Course[]) => void;
};

type LessonState = {
	lessons: Lesson[];
	setLessons: (lessons: Lesson[]) => void;
};

const useGlobalStore = create<CourseState & LessonState>()(set => ({
	courses: [],
	lessons: [],

	setCourses: courses => {
		set(state => {
			return {
				...state,
				courses,
			};
		});
	},

	setLessons: lessons => {
		set(state => {
			return {
				...state,
				lessons,
			};
		});
	},
}));

export default useGlobalStore;
