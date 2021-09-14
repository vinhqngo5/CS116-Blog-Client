import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MarkdownEditor from "./MarkdownEditor";
export default function MarkdownColumn() {
	return (
		<Box>
			<Box
				sx={{
					height: "200px",
				}}
			>
				<TextField
					sx={{
						width: "40%",
						display: "block",
					}}
					label="Heading"
					variant="standard"
				/>
				<TextField
					sx={{
						width: "50%",
					}}
					label="subtitle"
					variant="standard"
				/>
			</Box>
			<MarkdownEditor />
		</Box>
	);
}
