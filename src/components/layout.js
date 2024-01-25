import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";
import "../styles/layout.scss";

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	console.log(data);
	return (
		<div className="container">
			<nav className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about-us">About Us</Link>
					</li>
					<li>
						<Link to="/blog">Blogs</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
};

export default Layout;
