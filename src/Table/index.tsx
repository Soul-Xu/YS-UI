import React, { memo } from 'react';
import { Table } from 'antd';
import './styles/index.less' // 引入样式

interface YSTableProps {
  /** 按钮类型 */
  columns?: any;
  dataSource?: any;
}


/** Upload组件 */
const YSTable: React.FC<YSTableProps> = memo((props) => {
  const { columns, dataSource } = props
  return (
    <Table columns={columns} dataSource={dataSource} />
  );
});



export default memo(YSTable);
