import { Grid, Paper } from "@mui/material";
import React from "react";

export default function ProfileContent() {
	return (
		<Grid container spacing={2} justifyContent="center">
			<Grid item xs={12} sm={5}>
				<Paper
					variant="outlined"
					elevation={0}
					sx={{
						margin: "0px",
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "divider.main",
						minHeight: "400px",
					}}
				></Paper>
			</Grid>
			<Grid item xs={12} sm={7}>
				<Paper
					variant="outlined"
					elevation={0}
					sx={{
						margin: "0px",
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: "divider.main",
						minHeight: "400px",
					}}
				></Paper>
			</Grid>
		</Grid>
	);
}
