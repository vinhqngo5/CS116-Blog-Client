import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useTheme } from "@emotion/react";
import {
	docco,
	a11yDark,
	a11yLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBlock(props) {
	const value = props.children[0];
	const { className } = props;

	console.log(
		"🚀 ~ file: CodeBlock.js ~ line 10 ~ CodeBlock ~ className",
		className ? className.slice(9).toLowerCase() : "javascript"
	);
	const theme = useTheme();
	// console.log(props);

	return (
		<SyntaxHighlighter
			style={theme.palette.mode == "light" ? a11yLight : a11yDark}
			language={className ? className.slice(9).toLowerCase() : "javascript"}
			lineProps={{ style: { wordBreak: "break-all", whiteSpace: "pre-wrap" } }}
			wrapLines={true}
			customStyle={{
				display: "inline-block",
				overflowX: "unset",
				padding: "-1px 3px",
				margin: "0",
				borderRadius: "4px",
				backgroundColor: theme.palette.background.beta,
				color: theme.palette.text.primary,
			}}
		>
			{value}
		</SyntaxHighlighter>
	);
}
