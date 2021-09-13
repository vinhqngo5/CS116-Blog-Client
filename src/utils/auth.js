export const refreshTokenSetup = (res) => {
	let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
	const refreshToken = async () => {
		const newAuthRes = await res.reloadAuthResponse();
		refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
		console.log(
			"🚀 ~ file: auth.js ~ line 6 ~ refreshToken ~ newAuthRes",
			newAuthRes
		);

		console.log(
			"🚀 ~ file: auth.js ~ line 6 ~ refreshToken ~ newAuthRes.id_token",
			newAuthRes.id_token
		);

		// setup the other timer after the first one
		setTimeout(refreshToken, refreshTiming);
	};

	// setup first refresh timer
	setTimeout(refreshToken, refreshTiming);
};
