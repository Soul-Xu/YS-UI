import React from 'react';
import { YSRow, YSCol } from '../../../dist';
// import { YSInput } from 'yunsu-library';;
const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0', textAlign: 'center', color: '#fff' };
const App: React.FC = () => (
  <>
    <YSRow gutter={[12, 24]}>
      <YSCol span={24}> <div style={style}>col-12</div></YSCol>
      <YSCol span={12}> <div style={style}>col-12</div></YSCol>
      <YSCol span={12}> <div style={style}>col-12</div></YSCol>
      <YSCol span={8}> <div style={style}>col-12</div></YSCol>
      <YSCol span={8}> <div style={style}>col-12</div></YSCol>
      <YSCol span={8}> <div style={style}>col-12</div></YSCol>
    </YSRow>
  </>
)

export default App;