import { Container } from "@mui/material";
import React from "react";
import { BlogH6 } from "../../components/common/BlogTypography";
import MainColumnContainer from "../../components/layout/mainColumnContainer/MainColumnContainer";

export default function NotFound() {
	return (
		<MainColumnContainer>
			<Container
				style={{
					width: "100%",
					height: "100%",
					overflowY: "scroll",
					overflowX: "hidden",
					padding: "0px",
				}}
			>
				<BlogH6>Not Found</BlogH6>
			</Container>
		</MainColumnContainer>
	);
}
