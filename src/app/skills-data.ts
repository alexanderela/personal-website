import { Skillset, Skill } from './skillset';

export const SKILLSETS: Skillset[] = [
	{
		category: 'Front End',
		skills: [
			{ name: 'JavaScript ES5/ES6/ES7', image: '../../assets/front_end/javascript.png'},
			{ name: 'React', image: '../../assets/front_end/react.png'},
			{ name: 'HTML5', image: '../../assets/front_end/html.png'},
			{ name: 'CSS3', image: '../../assets/front_end/css.png'},
			{ name: 'Sass', image: '../../assets/front_end/sass.png'},
			{ name: 'Accessibility', image: '../../assets/front_end/aria.png'},
			{ name: 'JQuery', image: '../../assets/front_end/jquery.png'},
			{ name: 'Redux', image: '../../assets/front_end/redux.png'}
		]
	},
	{
		category: 'Back End',
		skills: [
			{ name: 'Node.js', image: '../../assets/back_end/node.png'},
			{ name: 'Express.js', image: '../../assets/back_end/express.png'},
			{ name: 'Knex.js', image: '../../assets/back_end/knex.png'},
			{ name: 'PostgreSQL', image: '../../assets/back_end/postgres.png'},
			{ name: 'Restful APIs', image: '../../assets/back_end/api.png'},
			{ name: 'Travis CI', image: '../../assets/back_end/travis-ci.png'}
		]
	},
	{
		category: 'Testing',
		skills: [
			{ name: 'Jest', image: '../../assets/testing/jest.png'},
			{ name: 'Enzyme', image: '../../assets/testing/enzyme.png'},
			{ name: 'Mocha', image: '../../assets/testing/mocha.png'},
			{ name: 'Chai', image: '../../assets/testing/chai.png'}
		]
	},
	{
		category: 'Workflow',
		skills: [
			{ name: 'Git', image: '../../assets/workflow/git.png'},
			{ name: 'GitHub', image: '../../assets/workflow/github.png'},
			{ name: 'Git Rebase', image: '../../assets/workflow/rebase.png'},
			{ name: 'Agile', image: '../../assets/workflow/agile.png'},
			{ name: 'Pair Programming', image: '../../assets/workflow/pair.png'},
			{ name: 'Project Management', image: '../../assets/workflow/project-management.png'}
		]
	},
	{
		category: 'Other',
		skills: [
			{ name: 'OOP', image: '../../assets/other/oop.png'},
			{ name: 'Heroku', image: '../../assets/other/heroku.png'},
			{ name: 'npm', image: '../../assets/other/npm.png'},
			{ name: 'Babel', image: '../../assets/other/babel.png'},
			{ name: 'Spanish', image: '../../assets/other/spanish.png'},
			{ name: 'French', image: '../../assets/other/french.png'},
			{ name: 'German', image: '../../assets/other/german.png'}
		]
	},
	{
		category: 'Currently Learning',
		skills: [
			{ name: 'TypeScript', image: '../../assets/learning/typescript.png'},
			{ name: 'Angular', image: '../../assets/learning/angular.png'},
			{ name: 'Vue.js', image: '../../assets/learning/vue.png'},
			{ name: 'React Native', image: '../../assets/learning/react-native.png'}
		]
	}
];