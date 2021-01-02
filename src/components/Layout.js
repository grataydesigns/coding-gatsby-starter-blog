import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";

const AppStyles = styled.main`
	max-width: 800px;
	margin: 0 auto;
`;

export const Layout = ({ children }) => {
	const { siteTitle, description } = useSiteMetadata();
	return (
		<AppStyles>
			<Header siteTitle={siteTitle} siteDescription={description} />
			{children}
		</AppStyles>
	);
};
