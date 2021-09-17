import axios from "axios";
import { store } from "../index";
import { fetchedPosts, user } from "../constants/cloneDatabase";

export const fetchPosts = () => {
	if (store.getState().blogState.fetchedPost == null) return fetchedPosts;
	else return store.getState().blogState.fetchedPost;
};

export const fetchUserInfo = () => user;

export const createPost = (payload) => [
	payload,
	...store.getState().blogState.fetchedPost,
];

export const fetchPostMarkdown = (payload) => {
	return findPostBySlug(payload.postSlug);
};

// tạm thời
const findPostBySlug = (postSlug) => {
	for (var post of fetchedPosts) {
		if (post.postSlug === postSlug) return axios.get(post.postMarkdown);
	}
	return null;
};
