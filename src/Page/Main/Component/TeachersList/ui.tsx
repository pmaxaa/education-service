import { useState } from 'react';
import { TeacherCard } from '../../../../Entities/Teacher/ui/TeacherCard/ui';
import useGlobalStore from '../../../../Shared/lib/store/store';
import './style.scss';

interface TeachersListProps {
	theme?: 'light' | 'dark';
}

export const TeachersList = ({ theme = 'light' }: TeachersListProps) => {
	const [currentItem, setCurrentItem] = useState<number>(0);
	const widthCard = window.innerWidth >= 450 ? 440 : window.innerWidth;
	const { teachers } = useGlobalStore();

	return (
		<section className={'teachersList teachersList_theme_' + theme}>
			<div className='teachersList__wrap'>
				<h2 className='teachersList__head'>Преподаватели</h2>
				<div className='teachersList__slider'>
					<ul
						className='teachersList__list'
						style={{
							width: teachers.length * widthCard,
							marginLeft: -(widthCard * currentItem) + 'px',
						}}
					>
						{teachers.map(teacher => {
							return (
								<li key={teacher.name} className='teachersList__item'>
									<TeacherCard {...teacher} theme={theme} />
								</li>
							);
						})}
					</ul>
					{currentItem > 0 && (
						<button
							className='teachersList__sliderBtn teachersList__sliderBtn_prev'
							onClick={() => {
								setCurrentItem(prev => prev - 1);
							}}
						>
							назад
						</button>
					)}
					{currentItem < teachers.length - 1 && (
						<button
							className='teachersList__sliderBtn teachersList__sliderBtn_next'
							onClick={() => {
								setCurrentItem(prev => prev + 1);
							}}
						>
							вперед
						</button>
					)}
				</div>
			</div>
		</section>
	);
};
