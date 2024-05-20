import { PropsWithChildren } from 'react';
import './Cover.scss';

type CoverProps = {
	title: string;
	subtitle: string;
	page: 'main' | 'course';
};

export default function Cover({
	title,
	subtitle,
	page,
	children,
}: PropsWithChildren<CoverProps>) {
	return (
		<section className={`cover cover-${page}`}>
			<div className='cover-content'>
				<h1>{title}</h1>
				<p>{subtitle}</p>
				<div className='cover-buttons'>{children}</div>
			</div>
		</section>
	);
}
