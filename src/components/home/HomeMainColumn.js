import { Container, Paper } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import { BlogPost } from "./BlogPost";
import { blogState$ } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function HomeMainColumn() {
	return (
		<Container
			style={{
				width: "100%",
				height: "100%",
				overflowY: "scroll",
				overflowX: "hidden",
				padding: "0px",
			}}
		>
			<Heading />
			<HomeContent />
		</Container>
	);
}

export function HomeContent() {
	const { fetchedPosts } = useSelector(blogState$);
	return (
		<Paper
			variant="outlined"
			elevation={0}
			sx={{
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "divider.main",
			}}
		>
			{fetchedPosts == null
				? "dang fetch"
				: fetchedPosts.map((fetchedPost, index) => (
						<BlogPost key={index} fetchedPost={fetchedPost} />
				  ))}
		</Paper>
	);
}
