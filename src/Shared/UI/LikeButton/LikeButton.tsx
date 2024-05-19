import './LikeButton.scss';

interface LikeButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
	isLiked: boolean;
	color_theme?: 'light' | 'dark';
	button_size?: 'default' | 'small';
}

export default function LikeButton({
	isLiked,
	color_theme = 'light',
	button_size = 'default',
	className,
	...props
}: LikeButtonProps) {
	return (
		<input
			type='checkbox'
			checked={isLiked}
			className={`likeButton likeButton-${button_size} likeButton-${color_theme} ${
				className ? className : ''
			}`}
			{...props}
		/>
	);
}
