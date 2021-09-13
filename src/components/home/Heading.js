import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import WithLogin from "../../hoc/WithLogin";
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
				<WithLogin
					Component={Button}
					sx={{
						textTransform: "none",
					}}
					variant="outlined"
					content="Login"
				/>
				<WithLogin
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
