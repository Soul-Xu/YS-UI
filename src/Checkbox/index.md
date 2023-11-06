---
category: Components
title: Checkbox 多选框 # 组件的标题，会在菜单侧边栏展示
toc: content # 在页面右侧展示锚点链接
group: # 分组
  title: 常用组件 # 所在分组的名称
  order: 4 # 分组排序，值越小越靠前
order: 4  
---

# Checkbox  多选框

## 介绍

多选框 Checkbox。

## 示例 


### Checkbox  基本使用
<!-- 可以通过code加载示例代码，dumi会帮我们做解析 -->
<code src="./demo/Checkbox.tsx">基础用法</code>


## API

<!-- 会生成API表格 -->
| 属性 | 说明 |类型 | 默认值 |
| :---- | :---------------------- | :-------- | :---- |
| options | 以配置形式设置子元素 | string[] \| number[] \| Array<{ label: ReactNode; value: string; disabled?: boolean; }> |  -  |
| direction | 间距方向 | vertical \| horizontal |  horizontal  |
| defaultValue | 默认选中的选项 | (string \| number)[] | [] |
| options.disabled | 禁选子单选器 | boolean | false |



