import axios from "axios";
import { store } from "../index";
import { fetchedPosts, user } from "../constants/cloneDatabase";

export const fetchPosts = () => {
	if (store.getState().blogState.fetchedPosts == null) return fetchedPosts;
	else return store.getState().blogState.fetchedPosts;
};

export const fetchUserInfo = () => user;

export const createPost = (payload) => [
	payload,
	...store.getState().blogState.fetchedPosts,
];

export const fetchPostMarkdown = (payload) => {
	return findPostBySlug(payload.postSlug);
};

// tạm thời
const findPostBySlug = (postSlug) => {
	const posts = store.getState().blogState.fetchedPosts || fetchedPosts;
	for (var post of posts) {
		if (post.postSlug === postSlug && !post.postMarkdownReal)
			return axios.get(post.postMarkdown);
		else if (post.postSlug === postSlug) return post.postMarkdownReal;
	}
	return null;
};
