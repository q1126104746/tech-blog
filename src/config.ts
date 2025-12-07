import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "李司机分享站",
	subtitle: "分享各种技术",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

// export const navBarConfig: NavBarConfig = {
// 	links: [
// 		LinkPreset.Home,
// 		LinkPreset.Archive,
// 		LinkPreset.About,
// 		// {
// 		// 	name: "GitHub",
// 		// 	url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
// 		// 	external: false, // Show an external link icon and will open in a new tab
// 		// },
// 	],
// };
export const navBarConfig: NavBarConfig = {
	links: [
		// 1. 首页（使用预设）
		LinkPreset.Home,
		
		// 2. AI攻略（站内栏目）
		{
			name: "AI攻略",
			url: "/ai/",
			external: false,
			// icon: "ph:robot", // 可选：添加机器人图标
		},
		
		// 3. 加密货币（站内栏目）
		{
			name: "加密货币",
			url: "/crypto/", 
			external: false,
			// icon: "ph:currency-btc", // 可选：添加加密货币图标
		},
		
		// 4. 黄金外汇（站内栏目）
		// {
		// 	name: "黄金外汇",
		// 	url: "/forex/",
		// 	external: false,
		// 	// icon: "ph:chart-line-up", // 可选：添加趋势图标
		// },
		
		// 5. K线技术（站内栏目）
		// {
		// 	name: "K线技术",
		// 	url: "/kline/",
		// 	external: false,
		// 	// icon: "ph:candlestick-chart", // 可选：添加K线图图标
		// },
		
		// 6. 软件分享（站内栏目）
		// {
		// 	name: "软件分享",
		// 	url: "/software/",
		// 	external: false,
		// 	// icon: "ph:desktop-tower", // 可选：添加电脑图标
		// },
		
		// 7. 归档（使用预设）
		LinkPreset.Archive,
		
		// 8. 关于（使用预设，可选）
		// LinkPreset.About,
		
		// 9. 外部链接：GitHub
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "李司机",
	bio: "热爱分享,Youtube中有完整视频教程",
links: [
		// 🔽 以下是你的社交链接，请保留你需要的，删除不需要的 🔽
		{
			name: "YouTube",
			icon: "fa6-brands:youtube", // YouTube图标
			url: "https://www.youtube.com/@porter-tech", // 你的YouTube频道链接
		},
		{
			name: "哔哩哔哩",
			icon: "fa6-brands:bilibili", // B站图标
			url: "https://space.bilibili.com/363318482", // 你的B站主页链接
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram", // Telegram图标
			url: "https://t.me/porter_tech_group", // 你的Telegram群组链接
		},
		// 你可以继续添加其他链接，例如：
		// {
		// 	name: "Twitter",
		// 	icon: "fa6-brands:twitter",
		// 	url: "https://twitter.com/你的用户名",
		// },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "版权所有© 李司机保留所有权利",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};

// src/config/tags.ts
export const commonTags = {
  ai: ["AI", "人工智能", "ChatGPT"],
  crypto: ["加密货币", "区块链", "比特币"],
  forex: ["外汇", "黄金", "交易"],
  kline: ["K线", "技术分析", "图表"],
  software: ["软件", "工具", "教程"],
} as const;
