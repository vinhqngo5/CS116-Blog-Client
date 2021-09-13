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
import { useDispatch, useSelector } from "react-redux";
import { themeModeState$ } from "../../../redux/selectors";
import * as actions from "../../../redux/actions";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

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
			<Button
				className={classes.writeButton}
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
				}}
				startIcon={<BookmarksOutlined />}
				variant="text"
				fullWidth
			>
				Saved
			</Button>
			<Box
				sx={{
					display: "flex",
					// width: "100%",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "background.default",
					color: "text.primary",
					borderRadius: 1,
					p: 3,
				}}
			>
				<IconButton sx={{ ml: 1 }} onClick={switchThemeMode} color="inherit">
					{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Box>
		</Box>
	);
}
