import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CreatePost from "./pages/posts/CreatePost";
import getDesignTokens from "./utils/getDesigntokens";
import { useSelector } from "react-redux";
import { themeModeState$ } from "./redux/selectors";
import { makeStyles } from "@mui/styles";
import Profile from "./pages/profile/Profile";

const useStyles = makeStyles((theme) => {
	return {
		app: {
			backgroundColor: theme.palette.background.default,
			minHeight: "100vh",
		},
	};
});

export function App() {
	const classes = useStyles();

	return (
		<Box className={classes.app}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/posts/create">
						<CreatePost />
					</Route>
					<Route exact path="/profile">
						<Profile />
					</Route>
				</Switch>
			</Router>
		</Box>
	);
}

export default function ToggleColorMode() {
	const mode = useSelector(themeModeState$);

	const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	);
}
