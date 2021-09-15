import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AvatarAndCover from "./AvatarAndCover";
export default function ProfileMainColumn() {
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
				padding: "0px",
			}}
		>
			<AvatarAndCover />
		</Container>
	);
}
