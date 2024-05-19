import { create } from 'zustand';
import { Course, Lesson, Teacher } from '../types/types';

//к вечеру будут функции для изменения статусов уроков и курсов ()
type CourseState = {
	courses: Course[];
	setCourses: (courses: Course[]) => void;
};

type LessonState = {
	lessons: Lesson[];
	setLessons: (lessons: Lesson[]) => void;
};

type TeacherState = {
	teachers: Teacher[];
	setTeachers: (teachers: Teacher[]) => void;
};

type ThemeState = {
	theme: 'light' | 'dark';
	changeTheme: () => void;
};

const useGlobalStore = create<
	CourseState & LessonState & TeacherState & ThemeState
>()(set => ({
	courses: [],
	lessons: [],
	teachers: [],
	theme: 'light',

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

	setTeachers: teachers => {
		set(state => {
			return {
				...state,
				teachers,
			};
		});
	},

	changeTheme: () => {
		set(state => {
			if (state.theme === 'dark') {
				return {
					...state,
					theme: 'light',
				};
			} else {
				return {
					...state,
					theme: 'dark',
				};
			}
		});
	},
}));

export default useGlobalStore;
