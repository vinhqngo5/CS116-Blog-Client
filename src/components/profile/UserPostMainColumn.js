import { Container, Link, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { blogState$ } from "../../redux/selectors";
import {
	BlogH7,
	BlogH5,
	BlogH6,
	BlogBodyText,
	BlogBodyListIem,
	BlogBodyCode,
	BlogBodyLink,
	BlogBodyPaper,
} from "../common/BlogTypography";
import Heading from "../home/Heading";
import "../../assets/css/app.css";
const renderers = {
	h1: BlogH5,
	h2: BlogH6,
	h3: BlogH7,
	div: BlogBodyText,
	p: BlogBodyText,
	li: BlogBodyListIem,
	code: BlogBodyCode,
	detail: BlogBodyCode,
	a: BlogBodyLink,
	pre: BlogBodyPaper,
};

export default function ProfileMainColumn() {
	const { inFetchingPosts, inReadingPost } = useSelector(blogState$);
	console.log(
		"🚀 ~ file: UserPostMainColumn.js ~ line 15 ~ ProfileMainColumn ~ inReadingPost",
		[inReadingPost]
	);
	return (
		<Container
			style={{
				// paddingRight:
				// 	"30px" /* Increase/decrease this value for cross-browser compatibility */,
				// boxSizing: "content-box" /* So the width will be 100% + 17px */,
				width: "100%",
				height: "100%",
				overflowY: "scroll",
				overflowX: "hidden",
				padding: "0px",
			}}
		>
			<Heading />
			<Paper
				variant="outlined"
				elevation={0}
				sx={{
					borderWidth: "1px",
					borderStyle: "solid",
					borderColor: "divider.main",
				}}
			>
				<Box sx={{ padding: "20px" }}>
					{inFetchingPosts ? (
						"in fetch"
					) : (
						<ReactMarkdown children={inReadingPost} components={renderers} />
					)}
				</Box>
			</Paper>
		</Container>
	);
}
