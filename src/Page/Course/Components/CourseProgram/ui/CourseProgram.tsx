import { useEffect, useState } from 'react';
import LessonCard from '../../../../../Entities/Lesson/ui/LessonCard/ui';
import { Lesson } from '../../../../../Shared/lib/types/types';
import './CourseProgram.scss';

export default function CourseProgram({
	lessons,
	color_theme = 'light',
}: {
	lessons: Lesson[];
	color_theme?: 'light' | 'dark';
}) {
	const [percentage, setPercentage] = useState<number | undefined>(undefined);
	useEffect(() => {
		const completedLessons = lessons.filter(
			lesson => lesson.completed === true
		);
		if (completedLessons.length === 0) setPercentage(0);
		else {
			const percentage = Math.round(
				(completedLessons.length / lessons.length) * 100
			);
			if (percentage) setPercentage(percentage);
		}
	}, [lessons]);

	const topics = lessons.reduce((acc: string[], obj) => {
		if (!acc.includes(obj.topic)) {
			acc.push(obj.topic);
		}
		return acc;
	}, []);

	return (
		<section className={`course-program course-program-${color_theme}`}>
			<p className='course-progress'>Пройдено {percentage}% курса</p>
			<h2>Программа курса</h2>
			<ul className='course-lessons'>
				{topics.map((topic, index) => {
					return (
						<li className='course-topic' key={index + topic}>
							<h3>
								Тема №{index + 1}. {topic}
							</h3>
							<ul className='course-topic-lessons'>
								{lessons
									.filter(lesson => lesson.topic === topic)
									.map(lesson => {
										return (
											<li key={lesson.id}>
												<LessonCard
													name={lesson.title}
													id={lesson.id}
													theme={color_theme}
												/>
											</li>
										);
									})}
							</ul>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
