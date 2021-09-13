import { Container, Typography } from "@mui/material";
import React from "react";
import Heading from "./Heading";
import useStyles from "./homeMainColumnStyles";
export default function HomeMainColumn() {
	const classes = useStyles();
	const array = [];
	for (let i = 0; i < 100; i++) array.push(i);
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
				"&::-webkit-scrollbar": {
					display: "none",
				},
			}}
		>
			<Heading />
			{array.map((el) => (
				<Typography
					variant="h2"
					sx={{
						color: "text.primary",
					}}
				>
					Mot hai ba bon nam
				</Typography>
			))}
		</Container>
	);
}
