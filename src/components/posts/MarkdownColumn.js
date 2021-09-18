import {
	Button,
	Grid,
	IconButton,
	TextField,
	useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import MarkdownEditor from "./MarkdownEditor";
import ImageUploading from "react-images-uploading";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { HighlightOffOutlined } from "@mui/icons-material";
import { ScheduleSendOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { createPost } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { blogState$ } from "../../redux/selectors";
import { useHistory } from "react-router";
export default function MarkdownColumn() {
	const dispatch = useDispatch();
	const history = useHistory();
	const clonePost = useSelector(blogState$).inCreatingPost;
	const [inCreatingPost, setInCreatingPost] = useState({
		...clonePost,
	});

	const handleTitleChange = (e) => {
		setInCreatingPost({ ...inCreatingPost, postTitle: e.target.value });
	};
	const handleSubtitleChange = (e) => {
		setInCreatingPost({ ...inCreatingPost, postSubtitle: e.target.value });
	};
	const handleImageChange = (uploadedImage) => {
		setInCreatingPost({ ...inCreatingPost, postCover: uploadedImage });
	};
	const handleMarkdownContentChange = (markdownContent) => {
		setInCreatingPost({ ...inCreatingPost, postMarkdownReal: markdownContent });
	};
	const handleCreatePost = () => {
		dispatch(createPost.createPostRequest(inCreatingPost));
		setInCreatingPost({ ...clonePost });
		history.push("/");
	};
	useEffect(() => {
		console.log(
			"🚀 ~ file: MarkdownColumn.js ~ line 34 ~ MarkdownColumn ~ inCreatingPost",
			inCreatingPost
		);
	}, [inCreatingPost]);
	return (
		<Box>
			<Box
				sx={{
					minHeight: "200px",
				}}
			>
				<Grid
					container
					style={{
						margin: "0px",
						width: "100%",
					}}
				>
					<Grid item xs={12} sm={6}>
						<Box
							sx={{
								padding: "20px",
							}}
						>
							<TextField
								onChange={handleTitleChange}
								multiline
								sx={{
									width: "70%",
									marginBottom: "20px",
								}}
								inputProps={{ style: { fontSize: 40, lineHeight: "40px" } }} // font size of input text
								InputLabelProps={{
									style: { fontSize: 20, lineHeight: "20px" },
								}} // font size of input label
								label="Title"
								variant="standard"
								size="large"
							/>
							<TextField
								onChange={handleSubtitleChange}
								multiline
								sx={{
									width: "100%",
								}}
								inputProps={{ style: { fontSize: 15 } }} // font size of input text
								InputLabelProps={{ style: { fontSize: 15 } }} // font size of input label
								label="subtitle"
								variant="standard"
								size="small"
							/>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ImageUploader handleImageChange={handleImageChange} />
					</Grid>
				</Grid>
			</Box>
			<MarkdownEditor
				handleMarkdownContentChange={handleMarkdownContentChange}
			/>
			<Button
				sx={{
					height: "40px",
					marginBottom: "15px",
				}}
				variant="contained"
				startIcon={<ScheduleSendOutlined />}
				onClick={handleCreatePost}
				fullWidth
			>
				Publish
			</Button>
		</Box>
	);
}

function ImageUploader({ handleImageChange }) {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));
	const [images, setImages] = React.useState([]);
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
		if (imageList.length) handleImageChange(imageList[0].data_url);
	};

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: matches ? "flex-end" : "center",
				padding: "20px",
			}}
		>
			<ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
				{({
					imageList,
					onImageUpload,
					onImageRemoveAll,
					onImageUpdate,
					onImageRemove,
					isDragging,
					dragProps,
				}) => (
					<Box
						sx={{
							height: matches ? "150px" : "250px",
							width: matches ? "300px" : "500px",
						}}
					>
						{!images.length ? (
							<Button
								onClick={onImageUpload}
								{...dragProps}
								sx={{
									height: "100%",
									width: "100%",
									color: "text.primary",
									backgroundColor: isDragging
										? "background.alpha"
										: "background.paper",
									"&:hover": {
										backgroundColor: "background.alpha",
									},
								}}
								variant="text"
								component="span"
								endIcon={<PhotoCamera />}
							>
								Upload
							</Button>
						) : (
							<Box
								sx={{
									position: "relative",
									height: "100%",
									width: "100%",
								}}
							>
								<img
									style={{
										height: "100%",
										width: "100%",
										borderRadius: "4px",
									}}
									// src="https://picsum.photos/300/150"
									src={images[0].data_url}
									alt=""
								/>
								<IconButton
									sx={{
										position: "absolute",
										top: "0px",
										right: "0px",
										color: "background.alpha",
									}}
									onClick={() => onImageRemove(0)}
									aria-label="delete"
								>
									<HighlightOffOutlined />
								</IconButton>
							</Box>
						)}
					</Box>
				)}
			</ImageUploading>
		</Box>
	);
}
