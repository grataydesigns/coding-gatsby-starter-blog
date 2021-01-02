import { MDXProvider } from "@mdx-js/react";
import { createGlobalStyle } from "styled-components";
import Code from "./src/components/Code";
import H1 from "./src/components/h1";
import React from "react";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
        margin: 0;
        padding: 0;
        color: #454545;
    }
    a {
        text-decoration: none;
        color: #454545;
        &:hover {
            text-decoration: underline;
        }
    }
    h1 {
        font-size: 2rem;
        margin: 0;
    }
`;

const components = {
	h1: H1,
	h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
	a: ({ children }) => <a style={{ color: "#07c" }}>{children}</a>,
	"p.inlineCode": (props) => (
		<code style={{ backgroundColor: "lightgray" }} {...props} />
	),
	pre: ({ children: { props } }) => {
		if (props.mdxType === "code") {
			return (
				<Code
					codeString={props.children.trim()}
					language={props.className && props.className.replace("language-", "")}
					{...props}
				/>
			);
		}
	},
};

export const wrapRootElement = ({ element }) => (
	<>
		<GlobalStyle />
		<MDXProvider components={components}>{element}</MDXProvider>
	</>
);
