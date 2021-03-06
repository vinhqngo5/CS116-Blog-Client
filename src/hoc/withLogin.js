import React from "react";
import { useGoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/auth";

const clientId =
	"656228553908-vqpaj40g2mi0fo1ufhb1bp7auubil5h6.apps.googleusercontent.com";

function withLogin(Component) {
	return ({ content, ...props }) => {
		const onSuccess = (res) => {
			console.log("🚀 ~ file: Login.js ~ line 8 ~ onSuccess ~ res", res);
			refreshTokenSetup(res);
		};

		const onFailure = (err) => {
			console.log("🚀 ~ file: Login.js ~ line 13 ~ onFailure ~ err", err);
		};

		const { signIn } = useGoogleLogin({
			onSuccess,
			onFailure,
			clientId,
			isSignedIn: true,
			accessType: "offline",
		});
		return (
			<Component onClick={signIn} {...props}>
				{content}
			</Component>
		);
	};
}

export default withLogin;
