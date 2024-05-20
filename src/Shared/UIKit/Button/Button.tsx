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
	color_theme?: 'light' | 'dark';
	size?: 'default' | 'large' | 'card' | 'header' | 'search';
}

type ButtonProps = generalProps & (buttonProps | anchorProps);

export default function Button({
	tag = 'button',
	theme = 'filled',
	size = 'default',
	color_theme = 'light',
	label,
	className,
	...props
}: ButtonProps) {
	return React.createElement(
		tag,
		{
			...props,
			className: `button button-${theme}-${color_theme} button-${size} ${
				className ? className : ''
			}`,
		},
		label
	);
}
