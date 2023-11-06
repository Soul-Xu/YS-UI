import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '云速易连',
    nav: [
      { title: '介绍', link: '/guide' },
      { title: '组件', link: '/components/input' }, // components会默认自动对应到src文件夹
    ],
  },
  styles: [
    `.dumi-default-header-left {
       width: 220px !important;
    }`,
  ],
});
