---
category: Components
title: Input 文本框 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 常用组件 # 所在分组的名称
  order: 4 # 分组排序，值越小越靠前
order: 1    
---

# Input 文本框

## 介绍

文本框组件 Input。

## 示例 


### Input 基本使用
<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->

<code src="./demo/Input.tsx">基础用法</code>

### Input 多行文本
<code src="./demo/TextArea.tsx">基础用法</code>

## API

<!-- 会生成API表格 -->
| 属性 | 说明 |类型 | 默认值 |
| :---- | :---------------------- | :-------- | :---- |
| allowClear | 可以点击清除图标删除内容 | boolean \| { clearIcon: ReactNode } |  -  |
| defaultValue | 输入框默认内容 | string | - |
| value | 输入框内容 | string | - |
| style | 自定义样式 | CSSProperties | - |
| className | 自定义类名 | 	string | - |

