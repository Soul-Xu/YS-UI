import React from 'react';
import { YSUpload } from '../../../dist';
// import { YSInput } from 'yunsu-library';;

const App: React.FC = () => {
  const handleSelectChange = (e: string) => {
    console.log(e);
  };

  const handleChange = ( fileList: any ) => {
    console.log(fileList)
  }
  return <>
    <YSUpload onChange={handleChange} >上传文件</YSUpload>
  </>

}



export default App;