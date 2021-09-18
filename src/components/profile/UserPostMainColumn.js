import { Container, Link, Paper, Divider, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
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
	BlogSubtitle,
	BlogCaptionSmall,
	BlogCaption,
	BlogBodyPreviewText,
} from "../common/BlogTypography";
import CodeBlock from "../common/CodeBlock";
import Heading from "../home/Heading";
import "../../assets/css/app.css";
import { useParams } from "react-router";
import { fetchPostMarkdown } from "../../redux/actions";
const renderers = {
	h1: BlogH5,
	h2: BlogH6,
	h3: BlogH7,
	div: BlogBodyText,
	p: BlogBodyText,
	li: BlogBodyListIem,
	code: CodeBlock,
	detail: BlogBodyCode,
	a: BlogBodyLink,
	pre: BlogBodyPaper,
};

export default function ProfileMainColumn() {
	const { authorSlug, postSlug } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			fetchPostMarkdown.fetchPostMarkdownRequest({
				postSlug,
			})
		);
	}, []);
	const { inFetchingReadingPost, inReadingPost } = useSelector(blogState$);

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
			{inFetchingReadingPost ? (
				<div></div>
			) : (
				<>
					<Header inReadingPost={inReadingPost} />
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
							<ReactMarkdown
								children={inReadingPost.postMarkdownReal}
								components={renderers}
							/>
						</Box>
					</Paper>
				</>
			)}
		</Container>
	);
}

const Header = ({ inReadingPost }) => {
	return (
		<Paper
			variant="outlined"
			elevation={0}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px 20px",
				margin: "10px 0px",
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "divider.main",
				minHeight: "20px",
			}}
		>
			<Box>
				<Box
					sx={{
						maxWidth: "100%",
						margin: "20px auto",
					}}
				>
					<img
						style={{
							height: "100%",
							width: "100%",
							borderRadius: "4px",
						}}
						src={inReadingPost.postCover}
						alt=""
					/>
				</Box>
				<BlogH5 sx={{ paddingBottom: "25px" }}>
					{inReadingPost.postTitle}
				</BlogH5>

				{/* <Divider sx={{ color: "background.alpha" }} /> */}

				<BlogBodyText
					sx={{
						margin: "0px 0px 25px",
						fontSize: "18px",
						lineHeight: "28px",
					}}
					gutterBottom
				>
					{inReadingPost.postSubtitle}
				</BlogBodyText>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						margin: "0px 10px 20px",
					}}
					// onClick={onClick}
				>
					<Avatar
						src="https://picsum.photos/60"
						sx={{
							width: "60px",
							height: "60px",
							marginRight: "20px",
						}}
					>
						V
					</Avatar>
					<Box>
						<BlogSubtitle gutterBottom>{inReadingPost.authorName}</BlogSubtitle>
						<BlogCaption gutterBottom>
							@{inReadingPost.authorSlug}/{inReadingPost.postSlug}
						</BlogCaption>
						<BlogCaptionSmall>{inReadingPost.publishedAt}</BlogCaptionSmall>
						{/* <BlogCaption sx={{ fontSize: "14px" }} gutterBottom>
							{inReadingPost.postSubtitle}
						</BlogCaption> */}
					</Box>
				</Box>
			</Box>
		</Paper>
	);
};
