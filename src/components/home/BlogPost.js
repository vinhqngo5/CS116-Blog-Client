import { Avatar, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ThumbUpAltOutlined, MessageOutlined } from "@mui/icons-material";
import Dotdotdot from "react-dotdotdot";
import {
	BlogH6,
	BlogCaption,
	BlogCaptionSmall,
	BlogSubtitle,
	BlogBodyPreviewText,
} from "../common/BlogTypography";
import { useHistory } from "react-router";

export function BlogPost({ fetchedPost }) {
	let history = useHistory();
	const goToPost = () => {
		history.push(`/${fetchedPost.authorSlug}/${fetchedPost.postSlug}`);
	};
	return (
		<Box
			sx={{
				borderBottomWidth: "1px",
				borderBottomStyle: "solid",
				borderBottomColor: "divider.main",
			}}
		>
			<Grid
				container
				style={{
					margin: "0px",
					width: "100%",
					padding: "20px",
				}}
			>
				<BlogHeader onClick={goToPost} fetchedPost={fetchedPost} />
				<BlogContent onClick={goToPost} fetchedPost={fetchedPost} />
				<BlogAction fetchedPost={fetchedPost} />
			</Grid>
		</Box>
	);
}

export function BlogHeader({ fetchedPost, onClick }) {
	return (
		<Grid item xs={12}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					cursor: "pointer",
					marginBottom: "20px",
				}}
				onClick={onClick}
			>
				<Avatar
					src="https://picsum.photos/35"
					sx={{
						width: "35px",
						height: "35px",
						marginRight: "10px",
					}}
				>
					V
				</Avatar>
				<Box>
					<BlogSubtitle>{fetchedPost.authorName}</BlogSubtitle>
					<BlogCaptionSmall>{fetchedPost.publishedAt}</BlogCaptionSmall>
				</Box>
			</Box>
		</Grid>
	);
}

export function BlogContent({ fetchedPost, onClick }) {
	return (
		<Grid
			style={{
				marginBottom: "10px",
				cursor: "pointer",
			}}
			item
			xs={12}
			container
			onClick={onClick}
		>
			{" "}
			<Grid item xs={12} sm={7}>
				<Dotdotdot clamp={4}>
					<BlogH6 gutterBottom>{fetchedPost.postTitle}</BlogH6>
				</Dotdotdot>
				<Dotdotdot clamp={2}>
					<BlogCaption gutterBottom>
						@{fetchedPost.authorSlug}/{fetchedPost.postSlug}
					</BlogCaption>
				</Dotdotdot>
				<Dotdotdot clamp={3}>
					<BlogBodyPreviewText gutterBottom>
						{fetchedPost.postSubtitle}
					</BlogBodyPreviewText>
				</Dotdotdot>
			</Grid>
			<Grid
				item
				sm={5}
				style={{
					height: "150px",
				}}
				display={{
					xs: "none",
					sm: "block",
				}}
			>
				<img
					style={{
						height: "100%",
						width: "90%",
						borderRadius: "4px",
						float: "right",
					}}
					src={fetchedPost.postCover}
					alt=""
				/>
			</Grid>
			<Grid
				item
				xs={12}
				style={{
					minHeight: "200px",
					marginBottom: "10px",
				}}
				display={{
					xs: "block",
					sm: "none",
				}}
			>
				<img
					style={{
						height: "100%",
						width: "100%",
						borderRadius: "4px",
						marginTop: "10px",
					}}
					src={fetchedPost.postCover}
					alt=""
				/>
			</Grid>
		</Grid>
	);
}

export function BlogAction() {
	return (
		<Grid item xs={12}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						marginRight: "30px",
					}}
				>
					<ThumbUpAltOutlined
						sx={{
							color: "text.secondary",
						}}
					/>
					<BlogCaption
						sx={{
							padding: "2px 0px 0px 2px",
						}}
					>
						424
					</BlogCaption>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						marginRight: "30px",
					}}
				>
					<MessageOutlined
						sx={{
							color: "text.secondary",
						}}
					/>
					<BlogCaption
						variant="caption"
						sx={{
							padding: "2px 0px 0px 2px",
						}}
					>
						49
					</BlogCaption>
				</Box>
			</Box>
		</Grid>
	);
}
