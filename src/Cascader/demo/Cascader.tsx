import React, {useState } from 'react';
import { YSCascader  } from '../../../dist';
// import { YSInput } from 'yunsu-library';;

const regionData = [
  {
    value: '北京市',
    label: '北京市',
    children: [
      {
        value: '北京市',
        label: '北京市',
        children: [
          {
            value: '东城区',
            label: '东城区',
          },
          {
            value: '西城区',
            label: '西城区',
          },
          // 添加更多的区域数据
        ],
      },
      // 添加更多的市级数据
    ],
  },
  // 添加更多的省级数据
];

const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);

  const handleRegionChange = (value: string[], selectedOptions: any) => {
    // 处理地区选择事件，可以将选择的地区存储在 state 中
    setSelectedRegion(value);
  };
  return <>
    <div>
      <h1>地区选择示例</h1>
      <YSCascader
        options={regionData}
        onChange={handleRegionChange}
        value={selectedRegion}
      />
      <br />
      <div>选择的地区: {selectedRegion.join(', ')}</div>
    </div>
  </>

}



export default App;