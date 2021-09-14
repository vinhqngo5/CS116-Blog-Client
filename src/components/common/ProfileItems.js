import React from "react";
import { Button, IconButton, Popover, Typography } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Avatar, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { themeModeState$ } from "../../redux/selectors";
import { Person, NotificationsOutlined } from "@mui/icons-material";
import withLogin from "../../hoc/withLogin";

export default function ProfileItems({ Component, anchorOrigin, ...props }) {
	const mode = useSelector(themeModeState$);
	const dispatch = useDispatch();
	const switchThemeMode = () => {
		if (mode === "light") dispatch(actions.switchDarkMode());
		else dispatch(actions.switchLightMode());
	};
	return (
		<Component {...props}>
			<IconButton sx={{}} onClick={switchThemeMode} color="inherit">
				{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
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
						content="Signin"
					/>
				</Popover>
			</div>
		);
	};

const LoginTypo = withLogin(Typography);

const AvatarWithPopover = withPopover(Avatar);
