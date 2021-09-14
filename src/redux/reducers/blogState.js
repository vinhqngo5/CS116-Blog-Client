import { INIT_STATE } from "../../constants/INIT_STATE";
import { getType, switchDarkMode, switchLightMode } from "../actions";

export default function modalReducer(state = INIT_STATE.blogState, action) {
	switch (action.type) {
		case getType(switchLightMode):
			return {
				...state,
				themeMode: "light",
			};
		case getType(switchDarkMode):
			return {
				...state,
				themeMode: "dark",
			};

		default:
			return state;
	}
}
