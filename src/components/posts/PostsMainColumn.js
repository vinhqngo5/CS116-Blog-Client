import { Container } from "@mui/material";
import React from "react";
import SmallHeader from "../layout/header/SmallHeader";
export default function PostsMainColumn() {
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
			<SmallHeader />
		</Container>
	);
}
