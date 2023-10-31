---
category: Components
title: Cascader 地区 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 常用组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
order: 15    
---

# Cascader 地区

## 介绍

地区 Cascader

## 示例 


### Cascader 基本使用
<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/Cascader.tsx">基础用法</code>


## APi

<!-- 会生成api表格 -->
| 属性 | 说明 |类型 | 默认值 |
| :---- | :---------------------- | :-------- | :---- |
| value | 指定选中项 | string[] \| number[] | - |
| options | 可选项数据源 | Option[] | - |
| onChange | 选择完成后的回调 | (value, selectedOptions) => void | - |
