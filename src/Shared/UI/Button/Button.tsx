import React from 'react';
import './Button.scss';

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	tag?: 'button';
}
interface anchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	tag?: 'a';
}
interface generalProps {
	label: string;
	theme?: 'stroke' | 'filled';
	size?: 'default' | 'large' | 'card' | 'header' | 'search'; //кнопки(ссылки) все разные на макете, сделала так, не знаю, как лучше. default - как кнопка "в каталог" под карточками, large - кнопка на обложке, card - кнопка карточки, header - кнопка в хедере, search - кнопки в поиске
}

type ButtonProps = generalProps & (buttonProps | anchorProps);

export default function Button({
	tag = 'button',
	theme = 'filled',
	size = 'default',
	label,
	className,
	...props
}: ButtonProps) {
	return React.createElement(
		tag,
		{
			...props,
			className: `button button-${theme} button-${size} ${
				className ? className : ''
			}`,
		},
		label
	);
}
