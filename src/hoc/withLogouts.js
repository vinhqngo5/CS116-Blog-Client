import React from "react";
import { useGoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "../utils/auth";

const clientId =
	"656228553908-vqpaj40g2mi0fo1ufhb1bp7auubil5h6.apps.googleusercontent.com";

const withLogout =
	(Component) =>
	({ content, ...props }) => {
		const onLogoutSuccess = (res) => {
			console.log(
				"🚀 ~ file: WithLogout.js ~ line 11 ~ onLogoutSuccess ~ res",
				res
			);
		};

		const onFailure = (err) => {
			console.log("🚀 ~ file: WithLogout.js ~ line 18 ~ onFailure ~ err", err);
		};

		const { signOut } = useGoogleLogout({
			onLogoutSuccess,
			onFailure,
			clientId,
		});
		return (
			<Component onClick={signOut} {...props}>
				{content}
			</Component>
		);
	};

export default withLogout;
