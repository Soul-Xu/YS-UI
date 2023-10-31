import React from 'react';
import { YSInputNumber } from '../../../dist';

const onChange = (value: number | null) => {
  console.log('changed', value);
};

const App: React.FC = () => <YSInputNumber min={0} max={100} defaultValue={0} onChange={onChange} />;

export default App;