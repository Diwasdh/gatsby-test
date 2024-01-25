import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage = () => {
	return (
		<Layout pageTitle={"About Us"}>
			<div className="section-one">
				Hello About Us
			</div>
		</Layout>
	);
};

export default IndexPage;

export const Head = () => <Seo title="About Us" />;
