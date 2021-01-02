import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import SEO from "react-seo-component";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const PostWrapper = styled.div``;
const Image = styled(Img)`
	border-radius: 5px;
`;

export default ({ data }) => {
	const {
		description,
		siteTitle,
		image,
		siteUrl,
		siteLanguage,
		siteLocale,
		twitterUsername,
	} = useSiteMetadata();
	return (
		<>
			<Layout>
				<SEO
					title="My Coding Blog Journey"
					titleTemplate={siteTitle}
					description={description}
					image={`${siteUrl}${image}`}
					pathname={siteUrl}
					siteLanguage={siteLanguage}
					siteLocale={siteLocale}
					twitterUsername={twitterUsername}
				/>
				{data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
					<PostWrapper key={id}>
						<Link to={fields.slug}>
							{!!frontmatter.cover ? (
								<Image fluid={frontmatter.cover.childImageSharp.fluid} />
							) : null}
							<h1>{frontmatter.title}</h1>
							<p>{frontmatter.date}</p>
							<p>{excerpt}</p>
						</Link>
					</PostWrapper>
				))}
			</Layout>
		</>
	);
};

export const query = graphql`
	query SITE_INDEX_QUERY {
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { published: { eq: true } } }
		) {
			nodes {
				id
				excerpt(pruneLength: 250)
				frontmatter {
					title
					date(formatString: "YYYY MMM Do")
					cover {
						publicURL
						childImageSharp {
							fluid(maxWidth: 500, quality: 100, traceSVG: { color: "#639" }) {
								...GatsbyImageSharpFluid_tracedSVG
							}
						}
					}
				}
				fields {
					slug
				}
			}
		}
	}
`;
