import React from 'react';
import { YSDatePicker } from '../../../dist';
// import { YSInput } from 'yunsu-library';;

const App: React.FC = () => {
  const onChange = (date: any, dateString: any) => {
    console.log(dateString);
  };
  return <>
    <YSDatePicker onChange={onChange}/> &nbsp;
    <YSDatePicker onChange={onChange} showTime={true} />
  </>

}



export default App;