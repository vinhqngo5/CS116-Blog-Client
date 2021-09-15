import {
	BookmarksOutlined,
	CreateOutlined,
	FeedOutlined,
	HomeOutlined,
	PersonOutlined,
} from "@mui/icons-material";

export const routes = [
	{
		text: "Write",
		startIcon: <CreateOutlined />,
		to: "/posts/create",
	},
	{
		text: "Profile",
		startIcon: <PersonOutlined />,
		to: "/profile",
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
