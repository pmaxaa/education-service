import { QuestionDropDown } from '../../../../../Shared/UIKit/QuestionDropDown/ui';
import useGlobalStore from '../../../../../Shared/lib/store/store';
import './CourseQuestuins.scss';

export default function CourseQuestions({
	courseId,
	theme,
}: {
	courseId: string;
	theme: 'light' | 'dark';
}) {
	const course = useGlobalStore(state =>
		state.courses.find(item => item.id === courseId)
	);

	return (
		<section className={`course-questions course-questions-${theme}`}>
			<h2>Подробности</h2>
			<ul className='questionsList__list'>
				{course?.questions.map((question, index) => {
					return (
						<li key={index} className='questionsList__item'>
							<QuestionDropDown {...question} theme={theme} />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
