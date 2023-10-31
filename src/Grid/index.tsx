import React, { memo } from 'react';
import { Col, Row } from 'antd';
import './styles/index.less' // 引入样式


interface YSColProps {
  /** 按钮类型 */
  gutter?: any;
  children?: any;
}

interface YSColProps {
  /** 按钮类型 */
  span?: any;
  children?: any;
}


/** input组件 */
const YSRow: React.FC<YSColProps> = memo((props) => {
  const { gutter, children } = props
  return (
    <Row gutter={gutter}>  {children} </Row>
  );
});

/** TextArea组件 */
const YSCol: React.FC<YSColProps> = memo((props) => {
  const { span, children } = props

  return (
    <Col span={span}>{children}</Col>
  );
});

export { YSRow, YSCol };
