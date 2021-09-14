import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ThumbUpAltOutlined, MessageOutlined } from "@mui/icons-material";
import Dotdotdot from "react-dotdotdot";

export function BlogPost() {
	return (
		<Box
			sx={{
				borderBottomWidth: "1px",
				borderBottomStyle: "solid",
				borderBottomColor: "divider.main",
			}}
		>
			<Grid
				container
				style={{
					margin: "0px",
					width: "100%",
					padding: "20px",
				}}
			>
				<BlogHeader />
				<BlogContent />
				<BlogAction />
			</Grid>
		</Box>
	);
}

export function BlogHeader() {
	return (
		<Grid item xs={12}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					cursor: "pointer",
					marginBottom: "20px",
				}}
			>
				<Avatar
					src="https://picsum.photos/35"
					sx={{
						width: "35px",
						height: "35px",
						marginRight: "10px",
					}}
				>
					V
				</Avatar>
				<Box>
					<Typography
						component="div"
						variant="subtitle2"
						px={{ lineHeight: 1.2 }}
					>
						Vinh Quang Ngo
					</Typography>
					<Typography component="div" variant="caption">
						Sep 13, 2021
					</Typography>
				</Box>
			</Box>
		</Grid>
	);
}

export function BlogContent() {
	return (
		<Grid
			style={{
				marginBottom: "10px",
			}}
			item
			xs={12}
			container
		>
			{" "}
			<Grid item xs={12} sm={7}>
				<Typography
					variant="h6"
					component="div"
					sx={{
						color: "text.primary",
						fontSize: "25px",
						fontWeight: "700",
					}}
					gutterBottom
				>
					The Hashnode Mobile App Has Finally Arrived 📱🚀
				</Typography>
				<Typography
					variant="caption"
					component="div"
					sx={{
						color: "text.secondary",
						fontSize: "14px",
					}}
					gutterBottom
				>
					townhall.hashnode.com
				</Typography>
				<Dotdotdot clamp={4}>
					<Typography
						variant="body2"
						color="textSecondary"
						component="div"
						gutterBottom
					>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
						ratione in vel quos eligendi, cupiditate deserunt harum molestias
						dolor sint veniam totam provident non assumenda! Nemo velit magni
						quidem temporibus?
					</Typography>
				</Dotdotdot>
			</Grid>
			<Grid
				item
				sm={5}
				style={{
					height: "150px",
				}}
				display={{
					xs: "none",
					sm: "block",
				}}
			>
				<img
					style={{
						height: "100%",
						width: "100%",
						borderRadius: "4px",
					}}
					src="https://picsum.photos/600/300"
					alt=""
				/>
			</Grid>
			<Grid
				item
				xs={12}
				style={{
					height: "300px",
					marginBottom: "10px",
				}}
				display={{
					xs: "block",
					sm: "none",
				}}
			>
				<img
					style={{
						height: "100%",
						width: "100%",
						borderRadius: "4px",
						marginTop: "10px",
					}}
					src="https://picsum.photos/600/300"
					alt=""
				/>
			</Grid>
		</Grid>
	);
}

export function BlogAction() {
	return (
		<Grid item xs={12}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						marginRight: "30px",
					}}
				>
					<ThumbUpAltOutlined
						sx={{
							color: "text.secondary",
						}}
					/>
					<Typography
						variant="caption"
						sx={{
							padding: "2px 0px 0px 2px",
							color: "text.secondary",
							fontSize: "14px",
						}}
					>
						424
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						marginRight: "30px",
					}}
				>
					<MessageOutlined
						sx={{
							color: "text.secondary",
						}}
					/>
					<Typography
						variant="caption"
						sx={{
							padding: "2px 0px 0px 2px",
							color: "text.secondary",
							fontSize: "14px",
						}}
					>
						49
					</Typography>
				</Box>
			</Box>
		</Grid>
	);
}
