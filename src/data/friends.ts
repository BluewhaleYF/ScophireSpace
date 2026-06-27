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
		imgurl: "https://github.com/BluewhaleYF/ScophireSpace-Files/blob/main/Friends/Solian.webp?raw=true",
		desc: "A peaceful social network",
		siteurl: "https://web.solian.app",
		tags: ["Social Network"],
	},
	{
		id: 2,
		title: "Chaos的小站",
		imgurl: "https://github.com/BluewhaleYF/ScophireSpace-Files/blob/main/Friends/Chaos.webp?raw=true",
		desc: "调制饮料，改变人生。正在尝试写点有用的",
		siteurl: "https://www.necoarcchaos.xyz/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 3,
		title: "Texas0295's Blog",
		imgurl: "https://github.com/BluewhaleYF/ScophireSpace-Files/blob/main/Friends/texas0295.jpg?raw=true",
		desc: "Texas0295的個人部落格",
		siteurl: "https://texas0295.top/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 4,
		title: "夜雨落花的blog",
		imgurl: "https://github.com/BluewhaleYF/ScophireSpace-Files/blob/main/Friends/nanci.jpeg?raw=true",
		desc: "遥看月色亦无痕，夜雨落花沾凡尘",
		siteurl: "https://blog.thsl.dpdns.org/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 5,
		title: "MKY-AN20's Blog",
		imgurl: "https://github.com/BluewhaleYF/ScophireSpace-Files/blob/main/Friends/mky.png?raw=true",
		desc: "欢迎来到MKY-AN20的主页",
		siteurl: "https://3w.mky-an20.os.kg/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 6,
		title: "StyleStar",
		imgurl: "https://raw.githubusercontent.com/BluewhaleYF/ScophireSpace-Files/refs/heads/main/Friends/stylestar.png",
		desc: "现代拟物化中文论坛 StyleStar Experimental",
		siteurl: "https://www.stylestar.win/",
		tags: ["Forum"],
	},
	{
		id: 7,
		title: "Qingmo's Blog",
		imgurl: "https://raw.githubusercontent.com/BluewhaleYF/ScophireSpace-Files/refs/heads/main/Friends/Qingmo.webp",
		desc: "一个热爱技术、喜欢折腾的开发者。 专注于前端开发，偶尔写写后端。 记录生活，分享技术，探索未知。",
		siteurl: "https://www.452789.xyz/",
		tags: ["Friends", "Blog"],
	},
		{
		id: 8,
		title: "GoatShed",
		imgurl: "https://raw.githubusercontent.com/BluewhaleYF/ScophireSpace-Files/refs/heads/main/Friends/Goatshed.webp",
		desc: "山羊寒舍 也就是小羊的博客啦",
		siteurl: "https://littlesheep.me/",
		tags: ["Friends", "Blog"],
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

