import Button from '../../../../Shared/UIKit/Button/Button';
import useGlobalStore from '../../../../Shared/lib/store/store';
import './style.scss';

interface CategoriesListProps {
	theme?: 'light' | 'dark';
	currentCategory: string;
	setCurrentCategory: (v: string) => void;
	className?: string;
}
export const CategoriesList = ({
	theme = 'light',
	currentCategory,
	setCurrentCategory,
	className,
}: CategoriesListProps) => {
	const { courses } = useGlobalStore();
	const allCategories = courses.reduce((acc: string[], obj) => {
		obj.categories.forEach(category => {
			if (!acc.includes(category)) {
				acc.push(category);
			}
		});
		return acc;
	}, []);

	return (
		<section
			className={
				'categoriesList' +
				' categoriesList_theme_' +
				theme +
				(className ? ' ' + className : '')
			}
		>
			<h1 className='categoriesList__head'>
				{currentCategory === '' ? 'Все курсы' : currentCategory}
			</h1>
			<ul
				className={
					'categoriesList__categoryList' +
					' categoriesList__categoryList_theme_' +
					theme
				}
			>
				<li className='categoriesList__categoryItem'>
					{
						<Button
							className={
								currentCategory.toLocaleLowerCase().trim() === ''
									? 'categoriesList__categoryItemBtn_activ'
									: ''
							}
							theme={
								currentCategory.toLocaleLowerCase().trim() === ''
									? 'filled'
									: 'stroke'
							}
							label={'Все курсы'}
							size='search'
							color_theme={theme}
							onClick={() => {
								setCurrentCategory('');
							}}
						/>
					}
				</li>
				{allCategories.map(category => {
					return (
						<li key={category} className='categoriesList__categoryItem'>
							<Button
								theme={
									currentCategory.toLocaleLowerCase().trim() ===
									category.toLocaleLowerCase().trim()
										? 'filled'
										: 'stroke'
								}
								label={category}
								size='search'
								color_theme={theme}
								onClick={() => {
									setCurrentCategory(category);
								}}
							/>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
