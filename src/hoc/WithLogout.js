import React from "react";
import { GoogleLogin, useGoogleLogin } from "react-google-login";
import { Button } from "@mui/material";
import { refreshTokenSetup } from "../utils/auth";

const clientId =
	"656228553908-vqpaj40g2mi0fo1ufhb1bp7auubil5h6.apps.googleusercontent.com";

export default function Login({ Component, content, ...props }) {
	const onLogoutSuccess = (res) => {
		console.log(
			"🚀 ~ file: WithLogout.js ~ line 11 ~ onLogoutSuccess ~ res",
			res
		);
	};

	const onFailure = (err) => {
		console.log("🚀 ~ file: WithLogout.js ~ line 18 ~ onFailure ~ err", err);
	};

	const { signOut } = useGoogleLogin({
		onLogoutSuccess,
		onFailure,
		clientId,
	});
	return (
		<Component onClick={signOut} {...props}>
			{content}
		</Component>
	);
}
