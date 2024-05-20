import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../../Shared/UIKit/Button/Button';
import LikeButton from '../../../../Shared/UIKit/LikeButton/LikeButton';
import useGlobalStore from '../../../../Shared/lib/store/store';
import { Course } from '../../../../Shared/lib/types/types';
import { changeCourse } from '../../api/action';
import './style.scss';

interface CourseCardProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
	description: string;
	isSelected?: boolean;
	id: string;
	status: Course['status'];
	favourite: boolean;
	theme?: 'light' | 'dark';
}
export const CourseCard = ({
	title,
	description,
	className,
	favourite,
	id,
	status,
	isSelected = false,
	theme,
	...props
}: CourseCardProps) => {
	const { editCourse } = useGlobalStore();

	const handleLikeChange = () => {
		const likeCourse = async () => {
			const newCourse = await changeCourse(id, !favourite, status);
			if (newCourse) {
				if (newCourse instanceof Error)
					console.log(`Editing course error: ${newCourse.message}`, 'error');
				else {
					editCourse(newCourse);
				}
			}
		};

		likeCourse();
	};

	return (
		<article
			{...props}
			className={
				'courseCard' +
				(' courseCard_theme_' + theme) +
				(className ? ' ' + className : '')
			}
		>
			<h3 className='courseCard__name'>{title}</h3>
			<p className='courseCard__description'>{description}</p>
			<div className='courseCard__btns'>
				<NavLink to={'/course/' + id} className={'courseCard__link'}>
					{isSelected ? (
						<Button
							label='Вы участник'
							size='card'
							theme='filled'
							color_theme={theme}
						/>
					) : (
						<Button
							label='Выбрать'
							size='card'
							theme='stroke'
							color_theme={theme}
						/>
					)}
				</NavLink>
				<LikeButton
					color_theme={theme}
					button_size='small'
					isLiked={favourite}
					onChange={handleLikeChange}
				/>
			</div>
		</article>
	);
};
