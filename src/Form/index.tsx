
import React, { memo, ReactNode } from 'react';
import { Button } from 'antd';
import { Form, Col, Row } from 'antd';

export interface YSFormProps {
  formFields?: any;
  onFinish?: any;
  onFinishFailed?: any;
  submit?: string;
  column?: any;
  children?: ReactNode; // 使用children来声明子元素
  style?: any;
  formLayout?: any;
}

const YSForm: React.FC<YSFormProps> = memo((props) => {
  const { formFields, onFinish, onFinishFailed, submit, column = 1, children, style, formLayout } = props
  return (
    <Form
      name="basic"
      layout={formLayout}
      // labelCol={{ span: 4 }}
      // wrapperCol={{ span: 20 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={style}
      labelAlign="left"
    >
      {children}
    </Form>
  );
});

export interface YSFormItemProps {
  name?: string;
  label?: any;
  rules?: any[];
  children?: any;
  htmlType?: any;
  wrapperCol?: any;
}
// 自定义的YSForm.Item组件
const YSFormItem: React.FC<YSFormItemProps> = memo((props) => {
  const { name, rules, label, children, htmlType, wrapperCol } = props
  return (
    <Form.Item
      wrapperCol={wrapperCol}
      name={name} label={label} rules={rules}>
      {children}
    </Form.Item>
  );
});

export { YSForm, YSFormItem };