import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => {
	return {
		left: {
			height: "100vh",
		},
		center: {
			backgroundColor: theme.palette.background.default,
			height: "200vh",
		},
		right: {
			height: "100vh",
			paddingLeft: "20px",
		},
	};
});
