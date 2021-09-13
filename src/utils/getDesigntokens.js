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
						primary: "#ffffff",
				  }),
		},
		background: {
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
		backgroundSecondary: {
			...(mode === "light"
				? {
						paper: "#f5f7fa",
						default: "#f5f7fa",
				  }
				: { paper: "#18191a", default: "#18191a" }),
		},
	},
});

export default getDesignTokens;
