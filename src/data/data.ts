import { HeaderNavs } from '../typescript/types';

const navs: HeaderNavs = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'Portfolio',
		link: 'portfolio',
	},
	{
		name: 'About',
		link: 'about',
	},
];

const skills = [
	'React',
	'Next.js',
	'JavaScript(ES6+)',
	'TypeScript',
	'HTML5',
	'CSS',
	'Tailwind CSS',
	'Express',
	'PHP',
	'C++',
	'SQL',
	'MongoDB',
	'Python',
	'Firebase',
	'Node.js',
	'MySQL',
	'Git',
	'GitHub',
	'VS Code',
];

const languages = ['English', 'Swahili'];

const interests = [
	'Frontend Architecture',
	'Web Development',
	'Software Engineering',
	'Responsive Design',
	'Generative AI',
];

const work = [
	{
		name: 'Power Learn Project',
		from: '6/2024',
		to: 'Present',
		title: 'Internship (Ass. Learner Experience Manager)',
	},
	{
		name: 'GODAN Kenya',
		from: '5/2024',
		to: 'Present',
		title: 'Internship (Lead Frontend Dev)',
	},
];

const projects = [
	{
		name: 'Free Learning Hub',
		desc: 'An online platform offering free educational resources and courses to enhance learning in various subjects.',
		linkOne: 'https://free-learning-hub.vercel.app/',
		linkTwo: 'https://github.com/developer-assets/Free-Learning-Hub/',
	},
	{
		name: 'Lego SpaceX',
		desc: 'A website showcasing custom Lego rocket pieces inspired by SpaceX, featuring detailed models and construction guides.',
		linkOne: 'https://lego-space-x.onrender.com/',
		linkTwo: 'https://github.com/developer-assets/Lego-SpaceX-Website/',
	},
	{
		name: 'Financly',
		desc: 'A platform to handle all your expenditure and income and give you analytics using graphs. Export & import to CSV supported.',
		linkOne: 'https://financly.onrender.com/',
		linkTwo: 'https://github.com/developer-assets/Financly',
	},
];

export { navs, skills, languages, interests, work, projects };
