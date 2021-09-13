import { alpha, Box, styled } from "@mui/system";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
	marginTop: "10px",
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	color: theme.palette.text.primary,
	backgroundColor: theme.palette.backgroundSecondary.default,
	"&:hover, &:focus-within": {
		backgroundColor: alpha(theme.palette.backgroundSecondary.default, 0.7),
		border: `solid 1px ${theme.palette.primary.main}`,
	},

	marginLeft: 0,
	width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default function RightSideBar() {
	return (
		<Box>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder="Search…"
					inputProps={{ "aria-label": "search" }}
				/>
			</Search>
		</Box>
	);
}
