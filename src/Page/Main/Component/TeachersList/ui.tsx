import { useState } from 'react';
import { TeacherCard } from '../../../../Entities/Teacher/ui/TeacherCard/ui';
import './style.scss';

interface TeachersListProps {
	theme?: 'light' | 'dark';
}

export const TeachersList = ({ theme = 'light' }: TeachersListProps) => {
	const [currentItem, setCurrentItem] = useState<number>(0);
	const widthCard = window.innerWidth >= 450 ? 440 : window.innerWidth;
	// здесь нужно подтянуть всех учителей из стейта
	const teacherItemList: {
		name: string;
		imgUrl?: string;
		description: string;
		direction: string;
	}[] = [
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
		{
			name: 'Имя преподавателя',
			imgUrl:
				'https://optim.tildacdn.com/tild3233-3462-4635-a339-636161376163/-/resize/744x/-/format/webp/13.jpg',
			description:
				'Краткое описание того, чем занимается, на каком направлении, какие заслуги',
			direction: 'Направление',
		},
	];
	return (
		<section className={'teachersList teachersList_theme_' + theme}>
			<div className='teachersList__wrap'>
				<h2 className='teachersList__head'>Преподаватели</h2>
				<div className='teachersList__slider'>
					<ul
						className='teachersList__list'
						style={{
							width: teacherItemList.length * widthCard,
							marginLeft: -(widthCard * currentItem) + 'px',
						}}
					>
						{teacherItemList.map(teacher => {
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
					{currentItem < teacherItemList.length - 1 && (
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
