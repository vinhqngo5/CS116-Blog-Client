import { Container, Grid } from "@mui/material";
import React from "react";
import LeftSideBar from "../../components/layout/leftSideBar/LeftSideBar";
import RightSideBar from "../../components/layout/rightSideBar/RightSideBar";
import HomeMainColumn from "../../components/home/HomeMainColumn";
import { Box } from "@mui/system";

export default function Home() {
	return (
		<Container maxWidth="lg">
			<Grid container spacing={2} justifyContent="center">
				<Box
					component={Grid}
					item
					md={2}
					display={{
						xs: "none",
						md: "block",
					}}
				>
					<LeftSideBar />
				</Box>
				<Box component={Grid} item xs={12} md={10} lg={7}>
					<HomeMainColumn />
				</Box>
				<Box
					component={Grid}
					item
					lg={3}
					display={{
						lg: "block",
						xs: "none",
					}}
				>
					<RightSideBar />
				</Box>
			</Grid>
		</Container>
	);
}
