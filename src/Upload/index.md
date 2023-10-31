---
category: Components
title: Upload 上传 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 常用组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
order: 8    
---

# Upload 上传

## 介绍

上传 Upload

## 示例 


### Upload 基本使用
<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/Upload.tsx">基础用法</code>


## APi

<!-- 会生成api表格 -->
| 属性 | 说明 |类型 | 默认值 |
| :---- | :---------------------- | :-------- | :---- |
| listType | 上传列表的内建样式，支持四种基本样式 text, picture, picture-card 和 picture-circle | string | text | - |
| action | 上传的地址 | string | (file) => Promise<string> | - |
| onChange | 上传文件改变时的回调，上传每个阶段都会触发该事件。详见 onChange | function | - |

