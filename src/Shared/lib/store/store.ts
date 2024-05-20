import { create } from 'zustand';
import { Course, Lesson, Teacher } from '../types/types';

type CourseState = {
	courses: Course[];
	setCourses: (courses: Course[]) => void;
	editCourse: (course: Course) => void;
};

type LessonState = {
	lessons: Lesson[];
	setLessons: (lessons: Lesson[]) => void;
	editLesson: (lesson: Lesson) => void;
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

	editCourse: course => {
		set(state => {
			const index = state.courses.findIndex(item => item.id === course.id);
			const newCourses = [...state.courses];
			newCourses[index] = course;
			return {
				...state,
				courses: newCourses,
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

	editLesson: lesson => {
		set(state => {
			const index = state.lessons.findIndex(item => item.id === lesson.id);
			const newLessons = [...state.lessons];
			newLessons[index] = lesson;
			return {
				...state,
				lessons: newLessons,
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
