import React, { useState } from 'react';
import { YSRadio } from 'yunsu-library';;

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("option1");
  const handleRadioChange = (e: string) => {
    setSelectedOption(e);
  };

  const radioOptions = [
    { label: '选项1', value: 'option1', disabled: false },
    { label: '选项2', value: 'option2', disabled: false },
    { label: '选项3', value: 'option3', disabled: false },
  ];

  return (
    <>
      <YSRadio
        options={radioOptions}
        onChange={handleRadioChange}
        value={selectedOption} />
    </>
  );
}

export default App;