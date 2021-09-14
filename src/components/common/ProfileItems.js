import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Avatar, Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { themeModeState$ } from "../../redux/selectors";
import { Person, NotificationsOutlined } from "@mui/icons-material";

export default function ProfileItems({ Component, ...props }) {
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
		</Component>
	);
}
