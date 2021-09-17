import { createAction, createActions } from "redux-actions";

export const getType = (reduxAction) => {
	return reduxAction().type;
};

export const switchLightMode = createAction("SWITCH_LIGHT_MODE");
export const switchDarkMode = createAction("SWITCH_DARK_MODE");

export const fetchPosts = createActions({
	fetchPostsRequest: undefined,
	fetchPostsSuccess: (payload) => payload,
	fetchPostsFailure: (err) => err,
});

export const fetchPostMarkdown = createActions({
	fetchPostMarkdownRequest: undefined,
	fetchPostMarkdownSuccess: (payload) => payload,
	fetchPostMarkdownFailure: (err) => err,
});
