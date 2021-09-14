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
import { useDispatch, useSelector } from "react-redux";
import { themeModeState$ } from "../../../redux/selectors";
import * as actions from "../../../redux/actions";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function LeftSideBar() {
	const classes = useStyles();
	const mode = useSelector(themeModeState$);
	const dispatch = useDispatch();
	const switchThemeMode = () => {
		if (mode === "light") dispatch(actions.switchDarkMode());
		else dispatch(actions.switchLightMode());
	};

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
			<Box
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
			>
				<IconButton sx={{}} onClick={switchThemeMode} color="inherit">
					{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
				<IconButton color="inherit">
					<Badge badgeContent={4} color="error">
						<NotificationsOutlined />
					</Badge>
				</IconButton>

				<Avatar
					sx={{
						bgcolor: "primary.main",
						margin: "20px",
						width: "35px",
						height: "35px",
						borderWidth: "1.5px",
						borderStyle: "solid",
						borderColor: "divider.border",
						cursor: "pointer",
					}}
				>
					<Person
						fontSize="medium"
						sx={{
							color: "#fff",
						}}
					/>
				</Avatar>
			</Box>
		</Box>
	);
}
