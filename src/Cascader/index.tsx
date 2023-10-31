import React, { memo, useRef, useEffect, useState  } from 'react';
import { Cascader } from 'antd';

interface Region {
  value: string;
  label: string;
  children?: Region[];
}

interface YSCascaderProps {
  options: Region[];
  onChange: any;
  value: string[];
}

/** Upload组件 */
const YSCascader: React.FC<YSCascaderProps> = memo((props) => {
  const { options, onChange, value } = props


  return (
    <div>
      <Cascader
      options={options}
      onChange={onChange}
      value={value}
      placeholder="请选择地区"
    />
    </div>
  );
});



export default memo(YSCascader);
