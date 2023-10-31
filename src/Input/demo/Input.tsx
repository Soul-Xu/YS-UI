import React from 'react';
import { YSInput } from '../../../dist';
// import { YSInput } from 'yunsu-library';;

const App: React.FC = () => (
  <>
    <YSInput placeholder="请填写文本内容"  allowClear={true}/>
  </>
)

export default App;