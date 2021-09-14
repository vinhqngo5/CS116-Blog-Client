import {
	BookmarksOutlined,
	Create,
	FeedOutlined,
	HomeOutlined,
} from "@mui/icons-material";

export const routes = [
	{
		text: "Write",
		startIcon: <Create />,
		to: "/posts/create",
	},
	{
		text: "My Feed",
		startIcon: <HomeOutlined />,
		to: "/",
	},
	{
		text: "My Posts",
		startIcon: <FeedOutlined />,
		to: "/posts",
	},
	{
		text: "Saved",
		startIcon: <BookmarksOutlined />,
		to: "/saved",
	},
];
