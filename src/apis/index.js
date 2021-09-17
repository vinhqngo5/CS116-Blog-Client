import axios from "axios";

export const fetchPosts = () => {};

export const fetchPostMarkdown = (payload) =>
	axios.get(`${payload.blogMarkdown}`);
