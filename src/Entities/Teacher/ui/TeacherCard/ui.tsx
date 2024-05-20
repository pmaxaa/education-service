import React, { useEffect, useState } from 'react';
import './style.scss';

interface TeacherCardProps extends React.HTMLAttributes<HTMLElement> {
	name: string;
	imgUrl?: string;
	description: string;
	direction: string;
	theme?: 'light' | 'dark';
}
export const TeacherCard = ({
	name,
	imgUrl,
	description,
	direction,
	className,
	theme = 'light',
	...props
}: TeacherCardProps) => {
	const [widthImg, setWidthImg] = useState<number>(440);

	useEffect(() => {
		const handleResize = () => {
			setWidthImg(window.innerWidth <= 450 ? window.innerWidth - 10 : 440);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<article
			{...props}
			className={
				'teacherCard' +
				(' teacherCard_theme_' + theme) +
				(className ? ' ' + className : '')
			}
		>
			<div className='teacherCard__direction'>{direction}</div>
			{imgUrl ? (
				<img
					src={imgUrl}
					alt='Фото преподавателя'
					className='teacherCard__img'
					width={widthImg}
					height={widthImg}
				/>
			) : (
				<div
					className='teacherCard__noImg'
					style={{ width: widthImg, height: widthImg }}
				>
					<svg
						width='68'
						height='74'
						viewBox='0 0 68 74'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M34.0206 35.9147C42.6589 35.9147 50.0921 28.2005 50.0921 18.1547C50.0921 8.23245 42.6178 0.879883 34.0206 0.879883C25.4218 0.879883 17.9492 8.3936 17.9492 18.237C17.9492 28.2005 25.4235 35.9147 34.0206 35.9147ZM8.78807 73.1199H59.2532C65.5618 73.1199 67.8109 71.313 67.8109 67.7765C67.8109 57.4102 54.8338 43.1079 34.0206 43.1079C13.1681 43.1079 0.189209 57.4102 0.189209 67.7765C0.189209 71.313 2.44007 73.1199 8.78807 73.1199Z'
							fill='currentColor'
						/>
					</svg>
				</div>
			)}
			<div className='teacherCard__info'>
				<h3 className='teacherCard__name'>{name}</h3>
				<p className='teacherCard__description'>{description}</p>
			</div>
			<footer className='teacherCard__footer'>
				<a className='teacherCard__detailsBtn'>Подробнее</a>
			</footer>
		</article>
	);
};
