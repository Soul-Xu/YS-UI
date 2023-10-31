import React from 'react';
import { YSSelect } from '../../../dist';
// import { YSInput } from 'yunsu-library';;

const App: React.FC = () => {
  const handleSelectChange = (e: string) => {
    console.log(e);
  };

  const options = [
    { value: 'jack', label: 'Jack', disabled: false },
    { value: 'lucy', label: 'Lucy', disabled: false },
    { value: 'Yiminghe', label: 'yiminghe', disabled: false },
    { value: 'disabled', label: 'Disabled', disabled: true },
  ]
  return <>
    <YSSelect options={options} onChange={handleSelectChange} style={{width: '100%'}} />
  </>

}



export default App;