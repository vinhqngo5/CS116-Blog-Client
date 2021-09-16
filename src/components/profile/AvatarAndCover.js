import { Avatar, Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CreateOutlined } from "@mui/icons-material";
import { BlogCaption, BlogH5 } from "../common/BlogTypography";

export default function AvatarAndCover() {
	return (
		<Paper
			variant="outlined"
			elevation={0}
			sx={{
				margin: "10px 0px 16px 0px",
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "divider.main",
				minHeight: "400px",
				position: "relative",
			}}
		>
			<Box
				sx={{
					backgroundImage: `url(
							"https://cdn.hashnode.com/res/hashnode/image/upload/v1584035951809/rA6njTVVd.jpeg?w=1600&fit=crop&crop=entropy&auto=compress&auto=compress"
						)`,
					backgroundSize: "cover",
					width: "100%",
					height: "260px",
				}}
			></Box>
			<Avatar
				src="https://picsum.photos/170"
				sx={{
					position: "absolute",
					top: "250px",
					left: "50%",
					transform: "translate(-50%, -70%)",
					borderWidth: "3px",
					borderStyle: "solid",
					borderColor: "divider.border",
					cursor: "pointer",
					width: "170px",
					height: "170px",
					bgcolor: "primary.main",
					boxShadow: "0px 0px 5px",
					color: "background.alpha",
				}}
			>
				V
			</Avatar>
			<Box
				sx={{
					boxSizing: "border-box",
					padding: "45px 20px 10px 20px",
					width: "100%",
					minHeight: "150px",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<BlogH5>Vinh Quang Ngo</BlogH5>
				<BlogCaption>Software developer 😜</BlogCaption>
				<Button
					sx={{
						height: "35px",
						textTransform: "none",
						color: "text.primary",
						"&:hover": {
							backgroundColor: "backgroundSecondary.default",
						},
					}}
					startIcon={<CreateOutlined />}
					variant="text"
				>
					<BlogCaption> Edit Profile</BlogCaption>
				</Button>
			</Box>
		</Paper>
	);
}
