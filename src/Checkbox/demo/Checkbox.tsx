import React, { useState } from 'react';
import { YSCheckbox } from 'yunsu-library';

const App: React.FC = () => {
  const options = [
    { label: '选项1', value: 'option1' },
    { label: '选项2', value: 'option2' },
    { label: '选项3', value: 'option3' },
  ];

  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (values: any) => {
    setSelectedValues(values);
  };

  return (
    <>
      <YSCheckbox options={options} defaultValue={selectedValues} onChange={handleCheckboxChange} />
    </>
  );
}

export default App;