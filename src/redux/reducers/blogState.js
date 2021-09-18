import { INIT_STATE } from "../../constants/INIT_STATE";
import {
	getType,
	switchDarkMode,
	switchLightMode,
	fetchPostMarkdown,
	fetchPosts,
	createPost,
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
			};
		case getType(fetchPostMarkdown.fetchPostMarkdownRequest):
			return {
				...state,
				inFetchingReadingPost: true,
			};
		case getType(fetchPostMarkdown.fetchPostMarkdownSuccess):
			return {
				...state,
				inFetchingReadingPost: false,
				inReadingPost: action.payload,
			};
		case getType(fetchPostMarkdown.fetchPostMarkdownFailure):
			return {
				...state,
				inFetchingReadingPost: false,
			};
		case getType(fetchPosts.fetchPostsRequest):
			return {
				...state,
				inFetchingPosts: true,
			};
		case getType(fetchPosts.fetchPostsSuccess):
			return {
				...state,
				inFetchingPosts: false,
				// fetchedPosts: action.payload,
				fetchedPosts: state.fetchedPosts ? state.fetchedPosts : action.payload,
			};
		case getType(fetchPosts.fetchPostsFailure):
			return {
				...state,
				inFetchingPosts: false,
			};
		// case getType(createPost.createPostRequest):
		// 	return {
		// 		...state,
		// 	};
		case getType(createPost.createPostSuccess):
			return {
				...state,
				inFetchingPosts: false,
				fetchedPosts: state.fetchedPosts
					? [action.payload, ...state.fetchedPosts]
					: [action.payload],
			};
		// case getType(createPost.createPostFailure):
		// 	return {
		// 		...state,
		// 	};
		default:
			return state;
	}
}
