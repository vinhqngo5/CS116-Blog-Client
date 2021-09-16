import React from "react";
import { IconButton, Popover, Typography, useMediaQuery } from "@mui/material";
import { Avatar, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { themeModeState$ } from "../../redux/selectors";
import {
	Person,
	NotificationsOutlined,
	Brightness4,
	Brightness7,
} from "@mui/icons-material";
import withLogin from "../../hoc/withLogin";
import { useTheme } from "@emotion/react";

export default function ProfileItems({ component, anchorOrigin, ...props }) {
	function switchTheme(element, mode) {
		console.log(
			"🚀 ~ file: ProfileItems.js ~ line 18 ~ switchTheme ~ element",
			element
		);
		if (element) element.setAttribute("data-theme", mode);
	}

	// Note: variable name _must_ start with a capital letter to become Component, but props need to be start in lower case
	const Component = component;
	const mode = useSelector(themeModeState$);
	const dispatch = useDispatch();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
	const switchThemeMode = () => {
		const switchThemeWrapper = document.querySelector(".theme-switch-wrapper");
		if (mode === "light") {
			dispatch(actions.switchDarkMode());
			switchTheme(switchThemeWrapper, "dark");
		} else {
			dispatch(actions.switchLightMode());
			switchTheme(switchThemeWrapper, "light");
		}
	};
	return (
		<Component {...props}>
			<IconButton sx={{}} onClick={switchThemeMode} color="inherit">
				{mode === "dark" ? <Brightness7 /> : <Brightness4 />}
			</IconButton>
			<IconButton color="inherit">
				<Badge badgeContent={4} color="error">
					<NotificationsOutlined />
				</Badge>
			</IconButton>

			<AvatarWithPopover
				anchorOrigin={anchorOrigin}
				sx={{
					bgcolor: "primary.main",
					margin: matches ? "20px" : "0px 20px",
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
			</AvatarWithPopover>
		</Component>
	);
}

const withPopover =
	(Component) =>
	({ anchorOrigin, ...props }) => {
		const [anchorEl, setAnchorEl] = React.useState(null);

		const handleClick = (event) => {
			setAnchorEl(event.currentTarget);
		};

		const handleClose = () => {
			setAnchorEl(null);
		};

		const open = Boolean(anchorEl);
		const id = open ? "simple-popover" : undefined;

		return (
			<div>
				<Component {...props} onClick={handleClick} />

				<Popover
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={anchorOrigin}
				>
					<LoginTypo
						sx={{
							p: 2,
							cursor: "pointer",
							color: "text.secondary",
							"&:hover": {
								color: "text.primary",
								backgroundColor: "background.default",
							},
						}}
						content="Login"
					/>
					<LoginTypo
						sx={{
							p: 2,
							cursor: "pointer",
							color: "text.secondary",
							"&:hover": {
								color: "text.primary",
								backgroundColor: "background.default",
							},
						}}
						content="Signup"
					/>
				</Popover>
			</div>
		);
	};

const LoginTypo = withLogin(Typography);

const AvatarWithPopover = withPopover(Avatar);
