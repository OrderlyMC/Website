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
          { text: "四核刷铁机", link: "/machines/4x-iron-golem-framing" },
          { text: "猪肉塔", link: "/machines/zombified-piglin-farming.md" },
          { text: "百万刷石机", link: "/machines/10m-cobblestone-farming.md" },
          { text: "经验塔", link: "/machines/enderman-farming.md" },
          { text: "潜影贝农场", link: "/machines/shulker-farming" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/OrderlyMC/Website" },
      { icon: "bilibili", link: "https://space.bilibili.com/3546937982716220" },
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/OrderlyMC/Website/blob/main/LICENSE">CC0-1.0 License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/OrderlyMC">OrderlyMC</a>'
    }

  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
});
