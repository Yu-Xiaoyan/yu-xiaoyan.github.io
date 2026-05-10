export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Xiaoyan's Homepage",
  year: new Date().getFullYear(),
  description: "Xiaoyan's Homepage",
  navItems: [
    {
      label: "Bio",
      href: "/",
    },
    {
      label: "Publications",
      href: "/pub",
    },
  ],
  navMenuItems: [
    {
      label: "Publications",
      href: "/pub",
    },
  ],
  links: {
    github: "https://github.com/XiaoyanWork",
    scholar: "https://scholar.google.com/citations?user=MgsexesAAAAJ&hl=zh-CN",
    email: "mailto:xiaoyan.yu@ntu.edu.sg",
  },
};
