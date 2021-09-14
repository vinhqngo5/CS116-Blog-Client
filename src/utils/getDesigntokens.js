const getDesignTokens = (mode) => ({
	palette: {
		mode,
		primary: {
			...(mode === "light"
				? {
						main: "#2962ff",
				  }
				: {
						main: "#2962ff",
				  }),
		},
		text: {
			...(mode === "light"
				? {
						primary: "#424242",
				  }
				: {
						primary: "rgb(245, 245, 245)",
				  }),
		},
		backgroundSecondary: {
			...(mode === "light"
				? {
						paper: "#ffffff",
						default: "#ffffff",
				  }
				: {
						paper: "#232626",
						default: "#232626",
				  }),
		},
		background: {
			...(mode === "light"
				? {
						paper: "#ffffff",
						default: "#f5f7fa",
				  }
				: { paper: "#232626", default: "#18191a" }),
		},
		divider: {
			...(mode === "light"
				? {
						main: "#e5e7eb",
						border: "#e5e7eb",
				  }
				: {
						main: "#424242",
						border: "#e5e7eb",
				  }),
		},
	},
	overrides: {
		// Style sheet name
		MuiTouchRipple: {
			// Name of the rule
			child: {
				// Some CSS
				backgroundColor: "red",
			},
		},
	},

	components: {
		// Name of the component
		MuiTypography: {
			styleOverrides: {
				// Name of the slot
				root: {
					// Some CSS
					lineHeight: 1.3,
				},
			},
		},
	},
});

export default getDesignTokens;
