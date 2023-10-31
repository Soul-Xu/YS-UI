import React from 'react';
import { YSRate } from '../../../dist';
// import { YSInput } from 'yunsu-library';;

const App: React.FC = () => {
  const handleSelectChange = (e: string) => {
    console.log(e);
  };

  const handleChange = ( fileList: any ) => {
    console.log(fileList)
  }
  return <>
    <YSRate value={1} />
  </>

}



export default App;