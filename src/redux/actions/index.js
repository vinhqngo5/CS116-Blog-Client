import { createAction } from "redux-actions";

export const getType = (reduxAction) => {
	return reduxAction().type;
};

export const switchLightMode = createAction("SWITCH_LIGHT_MODE");
export const switchDarkMode = createAction("SWITCH_DARK_MODE");
