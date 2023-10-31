---
category: Components
title: Select 选择器 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 常用组件 # 所在分组的名称
  order: 1 # 分组排序，值越小越靠前
order: 6    
---

# Select 选择器

## 介绍

选择器 Select。

## 示例 


### Select 基本使用
<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/Select.tsx">基础用法</code>


## APi

<!-- 会生成api表格 -->
| 属性 | 说明 |类型 | 默认值 |
| :---- | :---------------------- | :-------- | :---- |
| options | 以配置形式设置子元素 | string[] | number[] \| Array<{ label: ReactNode; value: string; disabled?: boolean; }> |  -  |
| defaultValue | 输入框默认内容 | string | - |
| onChange | 变化回调 | function(value: number \| string \| null) | - |

