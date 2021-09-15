import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AvatarAndCover from "./AvatarAndCover";
import ProfileContent from "./ProfileContent";
export default function ProfileMainColumn() {
	const array = [];
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
			<ProfileContent />
		</Container>
	);
}
