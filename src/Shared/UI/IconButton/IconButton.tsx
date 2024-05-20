import './IconButton.css';

// type IconButtonProps = {
// 	svg: JSX.Element;
// 	position: 'task' | 'column' | 'board';
// 	type: 'edit' | 'create' | 'delete';
// };
//Элемент для иконок, которые по сути являются кнопками, принимает svg, пока не знаю, пригодится ли
interface IconButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	svg: JSX.Element;
}

export default function IconButton({
	onClick,
	svg,

	type,
	disabled,
}: IconButtonProps) {
	return (
		<button
			type='button'
			onClick={onClick}
			disabled={disabled}
			className={`icon-button  icon-button-${type}`}
		>
			{svg}
		</button>
	);
}
