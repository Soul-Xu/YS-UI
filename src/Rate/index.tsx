import React, { memo } from 'react';
import { Rate } from 'antd';
import './styles/index.less' // 引入样式

interface YSRateProps {
  /** 按钮类型 */
  value?: any;
  onChange?: any;
  allowHalf?: boolean;
}


/** Upload组件 */
const YSRate: React.FC<YSRateProps> = memo((props) => {
  const { value, onChange, allowHalf = false } = props
  return (
    <Rate value={value} onChange={onChange}  allowHalf={allowHalf}/>
  );
});



export default memo(YSRate);
