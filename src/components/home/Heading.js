import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import withLogin from "../../hoc/withLogin";

export const LoginButton = withLogin(Button);

export default function Heading() {
	return (
		<Box
			elevation={0}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "10px 0",
			}}
		>
			<Typography
				variant="subtitle2"
				component="div"
				sx={{
					color: "text.primary",
				}}
			>
				Blogging as a developer, done right!
			</Typography>
			<Box>
				<LoginButton
					Component={Button}
					sx={{
						textTransform: "none",
					}}
					variant="outlined"
					content="Login"
				/>
				<LoginButton
					Component={Button}
					variant="contained"
					sx={{
						marginLeft: "10px",
						textTransform: "none",
					}}
					content="Create an account"
				/>
			</Box>
		</Box>
	);
}


