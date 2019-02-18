import { Portfolio } from './portfolio';

export const PORTFOLIOS: Portfolio[] = [
	{
		title: 'World of Flags',
		overview: 'World of flags is an app designed to help users teach themselves the flags of the world. Its underlying goal is to stimulate users’ curiosity about the world by familiarizing them with different countries’ flags. When interacting with World of Flags, users are shown a randomly generated flag from one of the world’s 193 countries and then can choose between 4 country options.',
		focusAreas: ['React.js', 'Redux', 'Redux-thunk','SCSS (Sass)', 'Jest / Enzyme', 'Travis CI', 'Heroku'],
		image: '../../assets/portfolio_projects/world-of-flags.png',
		deployedLink: 'https://world-of-flags.herokuapp.com/',
		githubLink: 'https://github.com/alexanderela/world-of-flags',
		favicon: '../../assets/favicons/wof-favicon.png'
	},
	{
		title: 'Palette Picker',
		overview: 'Palette Picker allows users to generate palettes consisting of 5 randomly selected colors, and to save favorite palettes under particular projects in a backend database.  Users can lock and unlock one or more colors by clicking a lock icon on each color, and enter customized names for projects and palettes stored within each project.',
		focusAreas: ['Node.js', 'Express.js', 'Knex.js', 'PostgreSQL', 'jQuery', 'Heroku'],
		image: '../../assets/portfolio_projects/palette-picker.png',
		deployedLink: 'https://palette-picker-alexanderela.herokuapp.com/',
		githubLink: 'https://github.com/alexanderela/palette-picker',
		favicon: '../../assets/favicons/pp-favicon.png'
	},
	{
		title: 'Disc Golf Guru',
		overview: 'Disc Golf Guru is an application designed to allow users to search for disc golf courses by zip code and/or city, view information about each course.  Such information includes location, number of holes, ratings, and weather forecasts.  This application utilizes the Disc Golf Course Review the open Weather Map APIs to collect Data.',
		focusAreas: ['React.js', 'Redux', 'Redux-thunk', 'React Router', 'Jest / Enzyme', 'Async Fetch Calls', 'Open Weather Map API', 'DGCR API'],
		image: '../../assets/portfolio_projects/disc-golf-guru.png',
		deployedLink: 'https://alexanderela.github.io/disc-golf-guru/',
		githubLink: 'https://github.com/alexanderela/disc-golf-guru',
		favicon: '../../assets/favicons/dgg-favicon.png'
	},
	{
		title: 'Movie Tracker',
		overview: 'Movie Tracker is an application designed to allow users to view information about movies currently playing.  With this application, users can create personalized accounts that they can log in and out of.  They can also select favorite movies by clicking on each movie card\'s star.  Each users\' favorited movies are then stored in their individual accounts.',
		focusAreas: ['React.js', 'Redux', 'Redux-thunk', 'React Router', 'Jest / Enzyme', 'The Movie Database API'],
		image: '../../assets/portfolio_projects/movie-tracker.png',
		deployedLink: 'https://movie-tracker.netlify.com/',
		githubLink: 'https://github.com/alexanderela/movie-tracker',
		favicon: '../../assets/favicons/mt-favicon.png'
	},
	{
		title: 'SWAPI Box',
		overview: 'An application that lets users view various pieces of Star Wars fan trivia, orgainzed by category and displayed on individual \'cards\' within a user-friendly interface.  The project uses the Star Wars API (SWAPI) to gather trivia information about Star Wars films and characters.  The app\'s title screen features a scrolling text from a randomly selected Star Wars film.  Users have the ability to select favorite card, which they can then view on a separate \'Favorites\' page.',
		focusAreas: ['React.js', 'Redux', 'Redux-thunk', 'React Router', 'Jest / Enzyme', 'The Movie Database API'],
		image: '../../assets/portfolio_projects/swapi-box.png',
		deployedLink: 'https://djcaraballo.github.io/SWAPI-box/',
		githubLink: 'https://github.com/alexanderela/star-wars-api-box',
		favicon: '../../assets/favicons/swapi-favicon.ico'
	}
]