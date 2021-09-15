import { Container } from "@mui/material";
import React from "react";
export default function PostsMainColumn() {
	const array = [];
	return (
		<Container
			style={{
				width: "100%",
				height: "100%",
				overflowY: "scroll",
				overflowX: "hidden",
				padding: "0px",
			}}
		></Container>
	);
}
