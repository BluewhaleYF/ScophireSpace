// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Solian",
		imgurl: "https://raw.githubusercontent.com/Solsynth/Solian/refs/heads/v3/assets/icons/icon-padded.png",
		desc: "A peaceful social network",
		siteurl: "https://github.com/Solsynth/Solian",
		tags: ["Social Media", "Social Network"],
	},
	{
		id: 2,
		title: "Goatshed",
		imgurl: "https://raw.githubusercontent.com/BluewhaleYF/ScophireSpace-Files/refs/heads/main/littlesheep.webp",
		desc: "こんにちは、ラムです",
		siteurl: "https://littlesheep.me/",
		tags: ["Friends"],
	},
	{
		id: 3,
		title: "Chaosの小窝",
		imgurl: "https://www.necoarcchaos.xyz/_astro/Chaoss.DFvC6oND_oNina.webp",
		desc: "NecoArc-Chaos的博客，为本站建立提供灵感",
		siteurl: "https://www.necoarcchaos.xyz/",
		tags: ["Friends"],
	},
	{
		id: 4,
		title: "Texas0295's Blog",
		imgurl: "https://texas0295.top/resources/img/site/info-img.jpg",
		desc: "Texas0295的個人部落格",
		siteurl: "https://texas0295.top/",
		tags: ["Friends"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

