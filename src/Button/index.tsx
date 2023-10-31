import React, { memo } from 'react';
import { Button } from 'antd';
import './styles/index.less' // 引入样式
export interface YSButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: any;
  htmlType?: any;
}

/** 按钮组件 */
const YSButton: React.FC<YSButtonProps> = (props) => {
  const { type = 'default', children, onClick, htmlType } = props
  return (
    <Button
      type={type}
      onClick={onClick}
      htmlType={htmlType}
    >
      {children}
    </Button>
  );
};

export default memo(YSButton);