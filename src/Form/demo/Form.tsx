// src/Button/demo/base.tsx

import React, { Children } from 'react';
import { YSForm, YSInput, YSRadio, YSSelect, YSDatePicker, YSRate, YSRichText } from '../../../dist';
import { Col, Row } from 'antd';
import { Input } from 'antd';
// import { YSSelect } from 'library';
const App: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // 处理表单提交逻辑
    console.log(values);
    console.log(values.YSRichText.toHTML());
  };

  const handleFormSubmitFailed = (errorInfo: any) => {
    // 处理表单提交失败逻辑
    console.log(errorInfo);
  };

  const radioOptions = [
    { label: '男', value: 'man', disabled: false },
    { label: '女', value: 'woman', disabled: false },
  ];

  const selectOptions = [
    { label: '成功', value: 'sucess', disabled: false },
    { label: '失败', value: 'error', disabled: false },
  ];
  const customFormFields = [
    {
      label: '姓名',
      name: 'name',
      rules: [{ required: true, message: '请输入姓名' }],
      render: <YSInput />,
    },
    {
      label: '邮箱',
      name: 'email',
      rules: [{ required: true, message: '请输入邮箱' }, { type: 'email', message: '请输入正确邮箱格式' }],
      render: <YSInput />,
    },
    {
      label: '电话',
      name: 'phone',
      rules: [{ required: true, message: '请输入电话' }, { pattern: /0?(13|14|15|18|17)[0-9]{9}$/, message: '请输入有效的手机号码' }],
      render: <YSInput />,
    },
    {
      label: '身份证',
      name: 'idCard',
      rules: [{ required: true, message: '请输入身份证' }, { pattern: /^[1-9]\d{5}(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/, message: '请输入有效的身份证' }],
      render: <YSInput />,
    },
    {
      label: '年龄',
      name: 'age',
      rules: [{ required: true, message: '请输入年龄' }],
      render: <YSInput />,
    },
    {
      label: '性别',
      name: 'sex',
      rules: [{ required: true, message: '请选择性别' }],
      render: <YSRadio options={radioOptions} />,
    },
    {
      label: '状态',
      name: 'status',
      rules: [{ required: true, message: '请选择状态' }],
      render: <YSSelect options={selectOptions} />,
    },
    {
      label: '日期',
      name: 'date',
      rules: [{ required: true, message: '请选择日期' }],
      render: <YSDatePicker />,
    },
    {
      label: '评分',
      name: 'Rate',
      rules: [{ required: true, message: '请选择评分' }, {
        type: 'number',
        min: 1,
        message: '请选择评分',
      },],
      render: <YSRate />,
    },
    {
      label: '富文本',
      name: 'YSRichText',
      rules: [{ required: false, message: '请输入富文本' }],
      render: <YSRichText />,
    },
    // Add more custom form fields as needed
  ];
  return (
    <>
      <YSForm
        formFields={customFormFields}
        onFinish={handleFormSubmit}
        submit="提交"
        onFinishFailed={handleFormSubmitFailed}>
      </YSForm>
    </>
  );
}

export default App;