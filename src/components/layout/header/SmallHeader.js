import { useTheme } from "@emotion/react";
import {
	Button,
	IconButton,
	Drawer,
	Paper,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useState } from "react";
import withLogin from "../../../hoc/withLogin";
import ProfileItems from "../../common/ProfileItems";
import LeftSideBar from "../leftSideBar/LeftSideBar";
import { Dehaze, EmojiEmotions } from "@mui/icons-material";
export const LoginButton = withLogin(Button);

export default function SmallHeader() {
	const theme = useTheme();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	const handleDrawer = useCallback(() => {
		setIsDrawerOpen(!isDrawerOpen);
	}, [isDrawerOpen]);

	if (matches) return null;

	return (
		<Paper
			variant="outlined"
			elevation={0}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px 20px",
				margin: "10px 0px",
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "divider.main",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box>
					<IconButton onClick={handleDrawer}>
						<Dehaze />
					</IconButton>
					<Drawer
						open={isDrawerOpen}
						onClose={handleDrawer}
						sx={{
							width: "200px",
						}}
					>
						<LeftSideBar />
					</Drawer>
				</Box>
				<EmojiEmotions
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
						paddingLeft: "0px",
						color: "text.primary",
					}}
					component="div"
				>
					hocmay
				</Typography>
			</Box>

			<ProfileItems
				component={Box}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					color: "text.primary",
					borderRadius: 1,
				}}
			></ProfileItems>
		</Paper>
	);
}
