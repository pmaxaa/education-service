import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../../../Shared/UIKit/Button/Button';
import './style.scss';

interface CourseCardProps extends React.HTMLAttributes<HTMLElement> {
	title: string;
	description: string;
	isSelected?: boolean;
	id: string;
	favourite: boolean;
	//setIsLike: (v: boolean) => void;
	theme?: 'light' | 'dark';
}
export const CourseCard = ({
	title,
	description,
	className,
	favourite,
	id,
	//setIsLike,
	isSelected = false,
	theme,
	...props
}: CourseCardProps) => {
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
				<button onClick={() => {}}>
					{favourite ? (
						<svg
							width='20'
							height='19'
							viewBox='0 0 20 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z'
								fill='currentColor'
								stroke='currentColor'
								strokeWidth='2'
							/>
						</svg>
					) : (
						<svg
							width='20'
							height='19'
							viewBox='0 0 20 19'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9.22318 16.2905L9.22174 16.2892C6.62708 13.9364 4.55406 12.0515 3.11801 10.2946C1.69296 8.55118 1 7.05624 1 5.5C1 2.96348 2.97109 1 5.5 1C6.9377 1 8.33413 1.67446 9.24117 2.73128L10 3.61543L10.7588 2.73128C11.6659 1.67446 13.0623 1 14.5 1C17.0289 1 19 2.96348 19 5.5C19 7.05624 18.307 8.55118 16.882 10.2946C15.4459 12.0515 13.3729 13.9364 10.7783 16.2892L10.7768 16.2905L10 16.9977L9.22318 16.2905Z'
								stroke='currentColor'
								strokeWidth='2'
							/>
						</svg>
					)}
				</button>
			</div>
		</article>
	);
};
