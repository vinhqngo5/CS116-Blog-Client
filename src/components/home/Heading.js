import { useTheme } from "@emotion/react";
import { Button, Paper, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import withLogin from "../../hoc/withLogin";
import ProfileItems from "../common/ProfileItems";

export const LoginButton = withLogin(Button);

export default function Heading() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));
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
			<Box>
				<Typography
					variant="h6"
					component="div"
					sx={{
						color: "text.primary",
						fontSize: "25px",
						fontWeight: "700",
					}}
				>
					Community Feed
				</Typography>
				<Typography
					variant="caption"
					component="div"
					sx={{
						color: "text.secondary",
						fontSize: "14px",
					}}
				>
					Recent articles from the community
				</Typography>
			</Box>
			{matches ? (
				<Box>
					<LoginButton
						component={Button}
						sx={{
							textTransform: "none",
						}}
						variant="outlined"
						content="Login"
					/>
					<LoginButton
						component={Button}
						variant="contained"
						sx={{
							marginLeft: "10px",
							textTransform: "none",
						}}
						content="Create an account"
					/>
				</Box>
			) : (
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
			)}
		</Paper>
	);
}
