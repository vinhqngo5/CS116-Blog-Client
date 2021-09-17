import React from "react";
import MarkdownColumn from "../../components/posts/MarkdownColumn";
import MainColumnContainer from "../../components/layout/mainColumnContainer/MainColumnContainer";
import "../../assets/css/app.css"
export default function CreatePost() {
	return (
		<MainColumnContainer>
			<MarkdownColumn />
		</MainColumnContainer>
	);
}
