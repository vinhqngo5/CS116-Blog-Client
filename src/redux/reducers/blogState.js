import { INIT_STATE } from "../../constants/INIT_STATE";
import {
	getType,
	switchDarkMode,
	switchLightMode,
	fetchPostMarkdown,
} from "../actions";

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
				// tạm
				inFetchingReadingPost: true,
			};
		case getType(fetchPostMarkdown.fetchPostMarkdownSuccess): //case: "getPostsRequest"
			return {
				...state,
				inFetchingReadingPost: false,
				inReadingPost: action.payload,
			};
		case getType(fetchPostMarkdown.fetchPostMarkdownFailure): //case: "getPostsRequest"
			return {
				...state,
				inFetchingReadingPost: false,
			};
		default:
			return state;
	}
}
