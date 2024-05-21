export type Lesson = {
	id: string;
	courseId: string;
	title: string;
	description: string;
	teacherId: string;
	topic: string;
	order: number;
	completed: boolean;
	link: string;
};

export type Course = {
	id: string;
	title: string;
	description: string;
	favorite: boolean;
	cost: 'бесплатно' | 'платно';
	level: 'новичкам' | 'продвинутым' | 'специалистам';
	duration_months: number;
	format: 'самообучение' | 'с наставником';
	status: 'пройден' | 'в процессе' | 'новый' | 'в избранном';
	categories: string[];
	questions: [{ question: string; answer: string }];
};

export type Teacher = {
	id: string;
	name: string;
	photo: string;
	description: string;
	category: string;
};
