import React from "react";
import styled from "styled-components";

const Heading1 = styled.h1`
	font-size: 4rem;
	color: tomato;
`;

const H1 = ({ children, props }) => <Heading1 {...props}>{children}</Heading1>;
export default H1;
