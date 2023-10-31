---
category: Components
title: Grid 栅格组件 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 常用组件 # 所在分组的名称
  order: 4 # 分组排序，值越小越靠前
order: 12    
---

# Grid 栅格组件

## 介绍

栅格组件 Grid。

## 示例 


### Grid 基本使用
<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/Grid.tsx">基础用法</code>


## APi

<!-- 会生成api表格 -->
| 属性 | 说明 |类型 | 默认值 |
| :---- | :---------------------- | :-------- | :---- |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 { xs: 8, sm: 16, md: 24}。或者使用数组形式同时设置 [水平间距, 垂直间距] | number \| object \| array |  0  |
| span | 栅格占位格数，为 0 时相当于 display: none | number |  -  |


