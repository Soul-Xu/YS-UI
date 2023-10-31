import React, { memo } from 'react';
import { Select } from 'antd';
import './styles/index.less' // 引入样式

interface YSSelectProps {
  /** 按钮类型 */
  options: { label: string; value: string, disabled: boolean }[];
  defaultValue?: string; // 默认选中项
  onChange?: (e: string) => void;
  style?: any;
}



/** input组件 */
const YSSelect: React.FC<YSSelectProps> = memo((props) => {
  const { options, defaultValue, onChange, style} = props
  return (
    <Select
    defaultValue={defaultValue}
    style={style}
    onChange={onChange}
    options={options}
  />
  );
});



export default memo(YSSelect);
