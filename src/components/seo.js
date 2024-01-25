import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<>
			<title>
				{title} | {data.site.siteMetadata.title}
			</title>
			<meta
				name="title"
				content={`${title} | ${data.site.siteMetadata.title}`}
			/>
			<meta
				name="description"
				content={`${title} | ${data.site.siteMetadata.title} page`}
			/>
		</>
	);
};

export default Seo;
