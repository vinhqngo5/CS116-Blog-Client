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
						paper: "#f5f7fa",
						default: "#f5f7fa",
				  }
				: { paper: "#18191a", default: "#18191a" }),
		},
		divider: {
			...(mode === "light"
				? {
						main: "#e5e7eb",
				  }
				: { main: "#424242" }),
		},
	},
});

export default getDesignTokens;
