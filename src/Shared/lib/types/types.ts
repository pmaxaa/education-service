//предполагаю, что пользователь один
// основывалась на json файле с курсами, который скидывала Настя

export type Lesson = {
	id: string;
	courseId: string;
	title: string;
	description: string;
	teacherId: string;
	topic: string;
	order: number;
	completed: boolean;
	link: string; //ссылка на видео
};

export type Course = {
	id: string;
	title: string;
	description: string;
	favourite: boolean;
	cost: 'бесплатно' | 'платно';
	level: 'новичкам' | 'продвинутым' | 'специалистам';
	duration_months: number;
	format: 'самообучение' | 'с наставником';
	status: 'пройден' | 'в процессе' | 'новый' | 'в избранном';
	categories: string[];
	questions: [{ question: string; answer: string }]; //для вопросов по курсу внизу страницы курса
};

export type Teacher = {
	id: string;
	name: string;
	photo: string;
	description: string;
	category: string;
};
