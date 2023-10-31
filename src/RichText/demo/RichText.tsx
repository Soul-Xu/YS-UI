import React, { useState } from 'react';
import { YSRichText } from '../../../dist';

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const handleRadioChange = (e: string) => {
    debugger;
    setSelectedOption(e);
  };

  const radioOptions = [
    { label: '选项1', value: 'option1', disabled: false },
    { label: '选项2', value: 'option2', disabled: false },
    { label: '选项3', value: 'option3', disabled: false },
  ];

  return (
    <>
      <YSRichText />
    </>
  );
}

export default App;