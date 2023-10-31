import React, { memo } from 'react';
import { Input } from 'antd';
import './styles/index.less' // 引入样式

const { TextArea } = Input;

interface YSInputProps {
  /** 按钮类型 */
  value?: string;
  placeholder?: string;
  allowClear?: boolean;
  defaultValue?: string;
  onChange?: any;
  disabled?: boolean;
  style?: any;
  className?: string;
}

interface YSTextAreaProps {
  /** 按钮类型 */
  value?: string;
  placeholder?: string;
  allowClear?: boolean;
  defaultValue?: string;
  onChange?: any;
  disabled?: boolean;
  style?: any;
  className?: string;
}


/** input组件 */
const YSInput: React.FC<YSInputProps> = memo((props) => {
  const { value, placeholder, defaultValue, allowClear, onChange, disabled, style, className } = props
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  return (
    <Input placeholder={placeholder} value={value} defaultValue={defaultValue} allowClear={allowClear} disabled={disabled} style={style} className={className} onChange={handleChange} />
  );
});

/** TextArea组件 */
const YSTextArea: React.FC<YSTextAreaProps> = memo((props) => {
  const { value, placeholder, defaultValue, allowClear, onChange, disabled, style, className } = props
  const handleChange = (e: any) => {
    if (onChange && typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };
  return (
    <TextArea placeholder={placeholder} value={value} defaultValue={defaultValue} allowClear={allowClear} disabled={disabled} style={style} className={className} onChange={handleChange} />
  );
});

export { YSInput, YSTextArea };
