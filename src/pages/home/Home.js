import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeMainColumn from "../../components/home/HomeMainColumn";
import MainColumnContainer from "../../components/layout/mainColumnContainer/MainColumnContainer";
import { fetchPosts } from "../../redux/actions";
export default function Home() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchPosts.fetchPostsRequest());
	}, [dispatch]);
	return (
		<MainColumnContainer>
			<HomeMainColumn />
		</MainColumnContainer>
	);
}
