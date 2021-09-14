import { Container, Grid } from "@mui/material";
import React from "react";
import LeftSideBar from "../../components/layout/leftSideBar/LeftSideBar";
import RightSideBar from "../../components/layout/rightSideBar/RightSideBar";
import { Box } from "@mui/system";
import useStyles from "../home/homeStyles";
import MarkdownColumn from "../../components/posts/MarkdownColumn";
export default function CreatePost() {
	const classes = useStyles();
	return (
		<Container>
			<Grid
				container
				spacing={0}
				justifyContent="center"
				columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 11 }}
			>
				<Box
					component={Grid}
					item
					md={2}
					xl={1}
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
					xl={6}
					className={classes.center}
					sx={{
						maxHeight: "100vh",
						overflow: "auto",
					}}
				>
					<MarkdownColumn />
				</Box>
				<Box
					component={Grid}
					item
					lg={3}
					xl={2}
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
