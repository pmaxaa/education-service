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

type ThemeState = {
	theme: 'light' | 'dark';
	changeTheme: () => void;
};

const useGlobalStore = create<CourseState & LessonState & ThemeState>()(
	set => ({
		courses: [],
		lessons: [],
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
	})
);

export default useGlobalStore;
