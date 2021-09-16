import React from "react";
import { Typography } from "@mui/material";

/**
 * import {
	BlogH6,
	BlogH5,
	BlogCaption,
	BlogCaptionSmall,
	BlogSubtitle,
	BlogBodyText,
}
 */

/**
 * BlogH5: 
 * 	variant="h5"
					component="div"
					sx={{
						color: "text.primary",
						fontSize: "30px",
						fontWeight: "700",
					}}
 * Example: "Community Feed"
 */

/**
 * BlogH6: 
 * 	variant="h6"
					component="div"
					sx={{
						color: "text.primary",
						fontSize: "25px",
						fontWeight: "700",
					}}
 * Example: "Community Feed"
 */

/**
 * BlogCaption
 * variant="caption"
					component="div"
					sx={{
						color: "text.secondary",
						fontSize: "14px",
					}}
* Example: "Recent articles from the community"
 */

/**
 * BlogCaptionSmall
 * variant="caption"
					component="div"
					sx={{
						color: "text.secondary",
						fontSize: "12px",
					}}
* Example: day time in blogpost
 */

/**
 * BlogSubtitle
 * 	component="div"
						variant="subtitle2"
						px={{ lineHeight: 1.2 }}
* Example: name in blog post          
 */

/**
 * BlogBodyText
 * 	variant="body2"
						color="textSecondary"
						component="div"
* Example: content of blog            
 */

export function BlogH6({ sx, ...props }) {
	return (
		<Typography
			variant="h6"
			component="div"
			sx={{
				color: "text.primary",
				fontSize: "25px",
				fontWeight: "700",
				...sx,
			}}
			{...props}
		>
			{props.children}
		</Typography>
	);
}

export function BlogH5({ sx, ...props }) {
	return (
		<Typography
			variant="h5"
			component="div"
			sx={{
				color: "text.primary",
				fontSize: "30px",
				fontWeight: "700",
				...sx,
			}}
			{...props}
		>
			{props.children}
		</Typography>
	);
}

export function BlogCaption({ sx, ...props }) {
	return (
		<Typography
			variant="caption"
			component="div"
			sx={{
				color: "text.secondary",
				fontSize: "14px",
				...sx,
			}}
			{...props}
		>
			{props.children}
		</Typography>
	);
}

export function BlogCaptionSmall({ sx, ...props }) {
	return (
		<Typography
			variant="caption"
			component="div"
			sx={{
				color: "text.secondary",
				fontSize: "12px",
				...sx,
			}}
			{...props}
		>
			{props.children}
		</Typography>
	);
}

export function BlogSubtitle({ sx, ...props }) {
	return (
		<Typography component="div" variant="subtitle2" {...props} sx={{ ...sx }}>
			{props.children}
		</Typography>
	);
}

export function BlogBodyText({ sx, ...props }) {
	return (
		<Typography
			variant="body2"
			color="textSecondary"
			component="div"
			sx={{ ...sx }}
			{...props}
		>
			{props.children}
		</Typography>
	);
}
