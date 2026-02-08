import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OrderlyMC",
  description: "The official website of OrderlyMC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "指南",
        items: [
          { text: "加入我们", link: "/guide/join.md" },
          { text: "游玩准则", link: "/guide/rules" },
        ],
      },
      { text: "历史", link: "/history" },
      { text: "机器", link: "/machines" },
      { text: "建筑", link: "/buildings" },
      { text: "交通", link: "/transportation" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "指南",
        collapsed: true,
        items: [
          { text: "加入我们", link: "/guide/join" },
          { text: "游玩准则", link: "/guide/rules" },
        ],
      },

      {
        text: "机器",
        collapsed: true,
        items: [
          { text: "百万刷石机", link: "/machines/10m-cobblestone-farming" },
          { text: "村民繁殖机", link: "/machines/villager-farming" },
          { text: "村民交易所", link: "/machines/villager-trading-hall" },
          { text: "经验塔", link: "/machines/enderman-farming" },
          { text: "女巫塔", link: "/machines/witch-farming" },
          { text: "史莱姆农场", link: "/machines/slime-farming" },
          { text: "四核刷铁机", link: "/machines/4x-iron-golem-framing" },
          { text: "潜影贝农场", link: "/machines/shulker-farming" },
          { text: "猪人塔", link: "/machines/zombified-piglin-farming" },
          { text: "猪肉塔", link: "/machines/meat-tower" },
          { text: "胡萝卜农场", link: "/machines/carrot-farm" },
          { text: "甘蔗机", link: "/machines/cane-farm" },
          { text: "竹子机", link: "/machines/bamboo-farm" },
        ],
      },
      {
        text: "建筑",
        collapsed: true,
        items: [],
      },
      {
        text: "交通",
        collapsed: true,
        items: [
          { text: "跨海线", link: "/transportation/kh-line.md" },
          { text: "离岛线", link: "/transportation/ld-line.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/OrderlyMC/Website" },
      { icon: "bilibili", link: "https://space.bilibili.com/3546937982716220" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/OrderlyMC/Website/blob/main/LICENSE">CC0-1.0 License</a>.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/OrderlyMC">OrderlyMC</a>',
    },
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
});
