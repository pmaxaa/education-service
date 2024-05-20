import { SearchDropDown } from '../../Features/SearchDropDown/ui';
import { HeaderTemplate } from '../../Shared/UIKit/HeaderTemplate/ui';
import useGlobalStore from '../../Shared/lib/store/store';

interface MainHeaderProps {
	theme?: 'light' | 'dark';
	onClickCategory?: (v: string) => void;
	textFilter?: string;
	setTextFilter?: (v: string) => void;
	setTheme?: (v: 'light' | 'dark') => void;
}
export const MainHeader = ({ setTheme, ...props }: MainHeaderProps) => {
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
		<HeaderTemplate theme={props.theme} setTheme={setTheme}>
			<SearchDropDown allCategories={allCategories} {...props} />
		</HeaderTemplate>
	);
};
