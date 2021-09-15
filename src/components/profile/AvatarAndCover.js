import { Avatar, Button, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CreateOutlined } from "@mui/icons-material";

export default function AvatarAndCover() {
	return (
		<Paper
			variant="outlined"
			elevation={0}
			sx={{
				margin: "10px 0px",
				borderWidth: "1px",
				borderStyle: "solid",
				borderColor: "divider.main",
				height: "400px",
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
					height: "65%",
				}}
			></Box>
			<Avatar
				src="https://picsum.photos/170"
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -45%)",
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
					paddingTop: "45px",
					width: "100%",
					height: "30%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Typography
					variant="h6"
					component="div"
					sx={{
						color: "text.primary",
						fontSize: "30px",
						fontWeight: "700",
					}}
				>
					Vinh Quang Ngo
				</Typography>
				<Typography
					variant="caption"
					component="div"
					sx={{
						color: "text.secondary",
						fontSize: "14px",
					}}
				>
					Software developer 😜
				</Typography>
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
					<Typography
						variant="caption"
						component="div"
						sx={{
							color: "text.secondary",
							fontSize: "14px",
						}}
					>
						{" "}
						Edit Profile
					</Typography>
				</Button>
			</Box>
		</Paper>
	);
}
