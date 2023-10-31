// src/Button/demo/base.tsx

import React from 'react';
import { YSButton } from '../../../dist';
const App: React.FC =  () => {

  return (
    <>
      <YSButton type="default">默认按钮</YSButton> &nbsp;
      <YSButton type="primary">主要按钮</YSButton>
    </>
  );
}

export default App;