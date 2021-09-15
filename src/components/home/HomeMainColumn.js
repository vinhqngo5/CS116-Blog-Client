import { Container, IconButton, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Heading from "./Heading";
import useStyles from "./homeMainColumnStyles";
import { BlogPost } from "./BlogPost";
import SmallHeader from "../layout/header/SmallHeader";

export default function HomeMainColumn() {
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
			<SmallHeader />
			<Heading />
			<HomeContent />
		</Container>
	);
}

export function HomeContent() {
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
			<BlogPost />
			<BlogPost />
			<BlogPost />
			<BlogPost />
		</Paper>
	);
}
