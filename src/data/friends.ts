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
		desc: "ラムです的 Solar Network Pages 博客 山羊寒舍",
		siteurl: "https://littlesheep.me/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 3,
		title: "Chaos的小站",
		imgurl: "https://www.necoarcchaos.xyz/_astro/Chaoss.DFvC6oND_oNina.webp",
		desc: "调制饮料，改变人生。正在尝试写点有用的",
		siteurl: "https://www.necoarcchaos.xyz/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 4,
		title: "Texas0295's Blog",
		imgurl: "https://texas0295.top/resources/img/site/info-img.jpg",
		desc: "Texas0295的個人部落格",
		siteurl: "https://texas0295.top/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 5,
		title: "夜雨落花的blog",
		imgurl: "https://nanci.solian.page/avatar.png",
		desc: "遥看月色亦无痕，夜雨落花沾凡尘",
		siteurl: "https://blog.thsl.dpdns.org/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 6,
		title: "MKY-AN20's Blog",
		imgurl: "https://blog.mky-an20.osfs.top/lib/img/avatar.png",
		desc: "您好,这里是MKY-AN20,欢迎来到我的博客",
		siteurl: "https://3w.mky-an20.osfs.top/",
		tags: ["Friends", "Blog"],
	},
	{
		id: 7,
		title: "StyleStar",
		imgurl: "https://www.stylestar.win/styles/vista/theme/images/logo.png",
		desc: "现代拟物化中文论坛 StyleStar Experimental",
		siteurl: "https://www.stylestar.win/",
		tags: ["Forum"],
	},
	{
		id: 8,
		title: "清雨博客",
		imgurl: "https://www.stylestar.win/styles/vista/theme/images/logo.png",
		desc: "嗨，我是 清雨，一位对计算机领域充满热情的爱好者。",
		siteurl: "https://www.452789.xyz/",
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

