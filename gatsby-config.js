const tailwindConfig = require("./tailwind.config.js");

module.exports = {
	siteMetadata: {
		title: `Jordan Cruz-Correa`,
		description: `Portfolio site for Jordan Cruz-Correa`,
		author: `@jccdev`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `jcc-dev-portfolio`,
				short_name: `portfolio`,
				start_url: `/`,
				display: `minimal-ui`,
				icon: `src/assets/images/jcc-logo.png`,
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: [
					require(`tailwindcss`)(tailwindConfig),
					require(`autoprefixer`),
					...(process.env.NODE_ENV === `production`
						? [require(`cssnano`)]
						: []),
				],
			},
		},
	],
};
