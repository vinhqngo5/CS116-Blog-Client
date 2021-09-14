import { Box } from "@mui/system";
import React from "react";

import { Button, Typography } from "@mui/material";
import useStyles from "./leftSideBarStyles";
import { EmojiEmotions } from "@mui/icons-material";
import ProfileItems from "../../common/ProfileItems";
import { Link } from "react-router-dom";
import { routes } from "../../../constants/routes";

export default function LeftSideBar() {
	const classes = useStyles();

	return (
		<Box className={classes.leftSideBar}>
			<Box
				sx={{
					marginTop: "10px",
					height: "50px",
					display: "flex",
					width: "100%",
					justifyContent: "center",
				}}
			>
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
						paddingLeft: "5px",
						color: "text.primary",
					}}
					component="div"
				>
					hocmay
				</Typography>
			</Box>

			{routes.map((route, index) => (
				<Link
					style={{
						textDecoration: "none",
					}}
					key={index}
					to={route.to}
				>
					{index === 0 ? (
						<Button
							sx={{
								height: "40px",
								marginBottom: "15px",
							}}
							variant="contained"
							startIcon={route.startIcon}
							fullWidth
						>
							{route.text}
						</Button>
					) : (
						<Button
							sx={{
								height: "35px",
								justifyContent: "flex-start",
								textTransform: "none",
								color: "text.primary",
								"&:hover": {
									backgroundColor: "backgroundSecondary.default",
								},
							}}
							startIcon={route.startIcon}
							variant="text"
							fullWidth
						>
							{route.text}
						</Button>
					)}
				</Link>
			))}

			<ProfileItems
				component={Box}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				sx={{
					position: "fixed",
					bottom: "0px",
					display: "flex",
					flexDirection: "column",
					// width: "100%",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "background.default",
					color: "text.primary",
					borderRadius: 1,
					p: 3,
				}}
			/>
		</Box>
	);
}
