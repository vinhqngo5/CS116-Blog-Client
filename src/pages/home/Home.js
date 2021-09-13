import { Container, Grid } from "@mui/material";
import React from "react";
import LeftSideBar from "../../components/layout/leftSideBar/LeftSideBar";
import RightSideBar from "../../components/layout/rightSideBar/RightSideBar";
import HomeMainColumn from "../../components/home/HomeMainColumn";
import { Box } from "@mui/system";
import useStyles from "./homeStyles";
import { BorderRight } from "@mui/icons-material";
export default function Home() {
	const classes = useStyles();
	return (
		<Container maxWidth="lg">
			<Grid container spacing={0} justifyContent="center">
				<Box
					component={Grid}
					item
					md={2}
					display={{
						xs: "none",
						md: "block",
					}}
					className={classes.left}
				>
					<LeftSideBar />
				</Box>
				<Box
					component={Grid}
					item
					xs={12}
					md={10}
					lg={7}
					className={classes.center}
					sx={{
						maxHeight: "100vh",
						overflow: "auto",
						borderLeftWidth: "1px",
						borderLeftStyle: "solid",
						borderLeftColor: "divider.main",
						borderRightWidth: "1px",
						borderRightStyle: "solid",
						borderRightColor: "divider.main",
					}}
				>
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
					className={classes.right}
				>
					<RightSideBar />
				</Box>
			</Grid>
		</Container>
	);
}
