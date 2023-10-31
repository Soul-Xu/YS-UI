import React from 'react';
import { InputNumber } from 'antd';

const onChange = (value: number | null) => {
  console.log('changed', value);
};

const App: React.FC = () => <InputNumber min={0} max={100} defaultValue={0} onChange={onChange} />;

export default App;