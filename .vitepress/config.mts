import { defineConfig } from "vitepress";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OrderlyMC",
  description: "The official website of OrderlyMC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "指南", link: "/guide" },
      { text: "历史", link: "/history" },
      { text: "机器", link: "/machines" },
      { text: "建筑", link: "/buildings" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/OrderlyMC/Website" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
});
