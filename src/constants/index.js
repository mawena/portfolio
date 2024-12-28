import {
	frontend,
	backend,
	databaseAdministration,
	javascript,
	html,
	css,
	vuejs,
	git,
	docker,
	oracle,
	laravel,
	komikult,
	coverhunt,
	dcc,
	kelhel,
	microverse,
	linux,
	mysql,
	flutter,
	mobile,
	php,
	python3,
	java,
	ouork,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Frontend Developer',
		icon: frontend,
	},
	{
		title: 'Mobile Developper',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Database Adminastrator',
		icon: databaseAdministration,
	},
	// {
	// 	title: 'System Administrator',
	// 	icon: sysAdmin,
	// },
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'PHP',
		icon: php,
	},
	{
		name: 'Python3',
		icon: python3,
	},
	{
		name: 'Java',
		icon: java,
	},
	// {
	// 	name: 'TypeScript',
	// 	icon: typescript,
	// },
	{
		name: 'Vue JS',
		icon: vuejs,
	},
	// {
	// 	name: 'Redux Toolkit',
	// 	icon: redux,
	// },
	// {
	// 	name: 'Tailwind CSS',
	// 	icon: tailwind,
	// },
	// {
	// 	name: 'Node JS',
	// 	icon: nodejs,
	// },
	{
		name: 'Laravel',
		icon: laravel,
	},
	{
		name: 'Flutter',
		icon: flutter,
	},
	// {
	// 	name: 'graphql',
	// 	icon: graphql,
	// },
	{
		name: 'Oracle',
		icon: oracle,
	}, {
		name: 'MySQL',
		icon: mysql,
	},
	{
		name: 'Git',
		icon: git,
	},
	// {
	// 	name: 'figma',
	// 	icon: figma,
	// },
	{
		name: 'Linux',
		icon: linux,
	},
	{
		name: 'Docker',
		icon: docker,
	},
];

const experiences = [
	{
		title: 'Database and application development assistant',
		company_name: 'COFINA TOGO',
		icon: coverhunt,
		iconBg: '#333333',
		date: 'February 2024 - now',
	},
	{
		title: 'IT Assistant Intern',
		company_name: 'COFINA TOGO',
		icon: coverhunt,
		iconBg: '#333333',
		date: 'August 2023 - February 2024',
	},
	{
		title: 'stage in Web Development',
		company_name: 'Gihada Africa',
		icon: coverhunt,
		iconBg: '#333333',
		date: 'Sep 2019 - March 2020',
	},
];

const projects = [
	{
		id: 'project-1',
		name: 'OuOrk',
		description: 'Ouork is a platform that connects students and recent graduates to companies offering paid missions. Students can create a profile, apply for offers adapted to their skills, while companies access a talent base for their needs. A practical solution to promote professional integration and meet the expectations of companies.',
		tags: [
			{
				name: 'laravel',
				color: 'blue-text-gradient',
			},
			{
				name: 'php',
				color: 'blue-text-gradient',
			},
			{
				name: 'mysql',
				color: 'blue-text-gradient',
			},
			{
				name: 'student',
				color: 'blue-text-gradient',
			},
		],
		image: ouork,
		repo: 'https://github.com/mawena/OuOrk',
		demo: 'https://ouork.chawena.com',
	},
];

export { services, technologies, experiences, projects };
