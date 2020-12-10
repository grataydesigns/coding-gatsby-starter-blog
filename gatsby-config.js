const siteMetadata = {
	title: "The Localhost Blog",
	description: "This is my coding blog where I write about my coding journey.",
	image: `/static/code.jpg`,
	siteUrl: `https://tender-mestorf-28347a.netlify.app/`,
	siteLanguage: "en-US",
	siteLocale: `en_us`,
	twitterUsername: "@grataydesigns",
	authorName: `Jonri Rothwell`,
};

module.exports = {
	siteMetadata,
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/posts/`,
			},
		},
	],
};
