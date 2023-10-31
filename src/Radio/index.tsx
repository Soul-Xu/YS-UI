
import React, { memo } from 'react';
import { Radio, Space } from 'antd';
interface YSRadioProps {
  options: { label: string; value: string, disabled: boolean }[];
  onChange?: any // 使用 string 类型，与 Ant Design 的 Radio 的 onChange 事件匹配
  value?: string;
  children?: React.ReactNode;
  optionType?: any;
  direction?: any;
}

const YSRadio: React.FC<YSRadioProps> = (props) => {
  const { options, onChange, value, optionType, direction, children } = props
  return (
    <Radio.Group buttonStyle="outline" optionType={optionType} className="dios" onChange={(e) => onChange(e.target.value)} value={value}>
       <Space direction={direction}>
      {options.map((option) => (
        <Radio key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </Radio>
      ))}
      </Space>
    </Radio.Group>
  );
};

export default memo(YSRadio);