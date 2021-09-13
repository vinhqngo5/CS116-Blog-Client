import { IconButton } from "@mui/material";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import getDesignTokens from "./utils/getDesigntokens";
import { useSelector } from "react-redux";
import { themeModeState$ } from "./redux/selectors";
import { useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import { switchDarkMode } from "./redux/actions";

export function App() {
	const mode = useSelector(themeModeState$);
	const dispatch = useDispatch();
	const switchThemeMode = () => {
		if (mode === "light") dispatch(actions.switchDarkMode());
		else dispatch(actions.switchLightMode());
	};
	return (
		<div>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "background.default",
					color: "text.primary",
					borderRadius: 1,
					p: 3,
				}}
			>
				{mode} mode
				<IconButton sx={{ ml: 1 }} onClick={switchThemeMode} color="inherit">
					{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
				</IconButton>
			</Box>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
				</Switch>
			</Router>
		</div>
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
