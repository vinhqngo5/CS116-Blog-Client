import { Box } from "@mui/system";
import React from "react";
import {
	BookmarksOutlined,
	Create,
	FeedOutlined,
	HomeOutlined,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import useStyles from "./leftSideBarStyles";

export default function LeftSideBar() {
	const classes = useStyles();

	return (
		<Box
			sx={{
				padding: "10px 10px",
			}}
		>
			<Button
				className={classes.writeButton}
				variant="contained"
				startIcon={<Create />}
				fullWidth
			>
				Write
			</Button>
			<Button
				className={classes.textButton}
				startIcon={<HomeOutlined />}
				variant="text"
				fullWidth
			>
				My Feed
			</Button>
			<Button
				className={classes.textButton}
				startIcon={<FeedOutlined />}
				variant="text"
				fullWidth
			>
				My Posts
			</Button>
			<Button
				className={classes.textButton}
				startIcon={<BookmarksOutlined />}
				variant="text"
				fullWidth
			>
				Saved
			</Button>
		</Box>
	);
}
