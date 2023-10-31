// import React, { memo } from 'react';
// import './styles/index.less' // 引入样式
// export interface ButtonProps {
//   /** 按钮类型 */
//   type?: 'primary' | 'default';
//   /** 按钮文字 */
//   children?: React.ReactNode;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>
// }

// /** 按钮组件 */
// const input: React.FC<ButtonProps> = (props) => {
//   const { type = 'default', children, onClick } = props
//   return (
//     <button
//       type='button'
//       className={`dumi-btn ${type ? 'dumi-btn-' + type : ''}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default memo(input);
import React, { memo } from 'react';
import { Checkbox, Space } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
const CheckboxGroup = Checkbox.Group;
interface YSCheckboxProps {
  options: Array<{ label: string; value: CheckboxValueType }>; // 多选框选项
  defaultValue?: Array<CheckboxValueType>; // 默认选中项
  onChange?: (values: Array<CheckboxValueType>) => void; // 多选框状态变化事件处理程序
}

const YSCheckbox: React.FC<YSCheckboxProps> = (props) => {
  const { options, onChange, defaultValue, } = props
  return (
    <CheckboxGroup options={options} defaultValue={defaultValue} onChange={onChange} />
  );
};

export default memo(YSCheckbox);