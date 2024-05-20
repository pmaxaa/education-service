import { useEffect, useState } from 'react';
import { getAllTeachers } from '../../../../Entities/Teacher/api/action';
import useGlobalStore from '../../../../Shared/lib/store/store';
import { Lesson, Teacher } from '../../../../Shared/lib/types/types';

export function useCourseTeachersData(lessons: Lesson[]) {
	const { teachers, setTeachers } = useGlobalStore();
	const [courseTeachers, setCourseTeachers] = useState<Teacher[]>([]);

	useEffect(() => {
		if (teachers.length > 0) {
			const courseTeachersIds = lessons.reduce((acc: string[], obj) => {
				if (!acc.includes(obj.teacherId)) {
					acc.push(obj.teacherId);
				}
				return acc;
			}, []);
			const courseTeachers = courseTeachersIds
				.map(id => teachers.find(teacher => teacher.id === id))
				.filter(Boolean) as Teacher[];
			setCourseTeachers(courseTeachers);
		} else {
			(async () => {
				const response = await getAllTeachers();
				if (response) {
					if (response instanceof Error) {
						console.log(
							`Teachers fetching error: ${response.message}`,
							'error'
						);
					} else {
						setTeachers(response);
						const courseTeachers = lessons
							.map(lesson =>
								teachers.find(teacher => teacher.id === lesson.teacherId)
							)
							.filter(Boolean) as Teacher[];
						setCourseTeachers(courseTeachers);
					}
				}
			})();
		}
	}, [lessons, setTeachers, teachers]);

	return courseTeachers;
}
