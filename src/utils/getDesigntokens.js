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
						alpha: "",
				  }),
		},
		background: {
			...(mode === "light"
				? {
						paper: "#ffffff",
						default: "#f5f7fa",
						alpha: "#c3c3c3",
						beta: "#f6f8fa",
				  }
				: {
						paper: "#232626",
						default: "#18191a",
						alpha: "rgb(125 122 122)",
						beta: "#1f2937",
				  }),
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
		MuiDrawer: {
			styleOverrides: {
				// Name of the slot
				paper: {
					// Some CSS
					// width: "60% !important",
					position: "static",
				},
			},
		},
	},
});

export default getDesignTokens;
