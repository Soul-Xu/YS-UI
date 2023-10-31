import React, { memo }  from 'react';
import { InputNumber } from 'antd';

interface YSInputNumberProps {
  onChange: (e: number | null) => void; // 使用 string 类型，与 Ant Design 的 Radio 的 onChange 事件匹配
  defaultValue: any;
  children?: React.ReactNode;
  max?: any;
  min?: any;
}

const YSInputNumber: React.FC<YSInputNumberProps> = (props) => {
  const { min, onChange, max, defaultValue  } = props
  return (
    <InputNumber min={min} max={max} defaultValue={defaultValue} onChange={onChange} />
  );
};

export default memo(YSInputNumber);