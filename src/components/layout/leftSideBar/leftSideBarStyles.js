import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => {
	console.log(
		"🚀 ~ file: leftSideBarStyles.js ~ line 4 ~ makeStyles ~ theme",
		theme
	);
	return {
		leftSideBar: {
			padding: "10px 20px 10px 10px",
		},
		writeButton: {
			height: "40px",
			marginBottom: "20px",
		},
		textButton: {
			height: "35px",
			justifyContent: "flex-start",
			textTransform: "none",
			color: theme.palette.text.primary,
		},
	};
});
