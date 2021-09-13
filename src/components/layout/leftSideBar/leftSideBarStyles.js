import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => {
	console.log(
		"🚀 ~ file: leftSideBarStyles.js ~ line 4 ~ makeStyles ~ theme",
		theme
	);
	return {
		writeButton: {
			height: "40px",
			marginBottom: "10px",
		},
		textButton: {
			height: "35px",
			justifyContent: "flex-start",
			textTransform: "none",
			// color: theme.palette.text.primary,
		},
	};
});
