import {
	Button,
	Grid,
	IconButton,
	Paper,
	TextField,
	useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import ImageUploading from "react-images-uploading";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Delete, HighlightOffOutlined } from "@mui/icons-material";
import { ScheduleSendOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

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
						<ImageUploader />
					</Grid>
				</Grid>
			</Box>
			<MarkdownEditor />
			<Button
				sx={{
					height: "40px",
					marginBottom: "15px",
				}}
				variant="contained"
				startIcon={<ScheduleSendOutlined />}
				fullWidth
			>
				Publish
			</Button>
		</Box>
	);
}

function ImageUploader() {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("sm"));
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
