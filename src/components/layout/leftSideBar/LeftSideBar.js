import { Box } from "@mui/system";
import React from "react";
import {
	BookmarksOutlined,
	Create,
	FeedOutlined,
	HomeOutlined,
	Person,
	NotificationsOutlined,
} from "@mui/icons-material";
import { Button, Avatar, Badge, Typography } from "@mui/material";
import useStyles from "./leftSideBarStyles";
import * as actions from "../../../redux/actions";

import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ProfileItems from "../../common/ProfileItems";
export default function LeftSideBar() {
	const classes = useStyles();

	return (
		<Box className={classes.leftSideBar}>
			<Box
				sx={{
					marginTop: "10px",
					height: "50px",
					display: "flex",
					width: "100%",
					justifyContent: "center",
				}}
			>
				<EmojiEmotionsIcon
					sx={{
						fontWeight: "700",
						fontSize: "25px",
						color: "primary.main",
					}}
				/>
				<Typography
					sx={{
						fontWeight: "700",
						fontSize: "25px",
						lineHeight: 1,
						paddingLeft: "5px",
						color: "text.primary",
					}}
					component="div"
				>
					hocmay
				</Typography>
			</Box>
			<Button
				sx={{
					height: "40px",
					marginBottom: "15px",
				}}
				variant="contained"
				startIcon={<Create />}
				fullWidth
			>
				Write
			</Button>
			<Button
				sx={{
					height: "35px",
					justifyContent: "flex-start",
					textTransform: "none",
					color: "text.primary",
					"&:hover": {
						backgroundColor: "backgroundSecondary.default",
					},
				}}
				startIcon={<HomeOutlined />}
				variant="text"
				fullWidth
			>
				My Feed
			</Button>
			<Button
				sx={{
					height: "35px",
					justifyContent: "flex-start",
					textTransform: "none",
					color: "text.primary",
					"&:hover": {
						backgroundColor: "backgroundSecondary.default",
					},
				}}
				startIcon={<FeedOutlined />}
				variant="text"
				fullWidth
			>
				My Posts
			</Button>
			<Button
				sx={{
					height: "35px",
					justifyContent: "flex-start",
					textTransform: "none",
					color: "text.primary",
					"&:hover": {
						backgroundColor: "backgroundSecondary.default",
					},
				}}
				startIcon={<BookmarksOutlined />}
				variant="text"
				fullWidth
			>
				Saved
			</Button>

			<ProfileItems
				Component={Box}
				sx={{
					position: "fixed",
					bottom: "0px",
					display: "flex",
					flexDirection: "column",
					// width: "100%",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "background.default",
					color: "text.primary",
					borderRadius: 1,
					p: 3,
				}}
			/>
		</Box>
	);
}
