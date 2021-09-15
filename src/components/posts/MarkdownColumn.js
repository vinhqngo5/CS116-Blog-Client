import { Button, Grid, IconButton, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import ImageUploading from "react-images-uploading";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Delete, HighlightOffOutlined } from "@mui/icons-material";

export default function MarkdownColumn() {
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
								sx={{
									width: "70%",
									marginBottom: "20px",
								}}
								inputProps={{ style: { fontSize: 40 } }} // font size of input text
								InputLabelProps={{
									style: { fontSize: 20, lineHeight: "20px" },
								}} // font size of input label
								label="Title"
								variant="standard"
								size="large"
							/>
							<TextField
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
						<ImageUploader />
					</Grid>
				</Grid>
			</Box>
			<MarkdownEditor />
		</Box>
	);
}

function ImageUploader() {
	const [images, setImages] = React.useState([]);
	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
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
							height: "150px",
							width: "300px",
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
