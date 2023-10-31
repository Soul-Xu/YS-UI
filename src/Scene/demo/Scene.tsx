import React, { useState } from 'react';
import { YSForm, YSInput, YSFormItem, YSTextArea, YSButton, YSSelect, YSUpload, YSDatePicker } from '../../../dist';
import { Divider, Form, Col, Row } from 'antd';
import '../styles/index.less' // 引入样式
// import { YSSelect } from 'library';
// import { YSInput } from 'yunsu-library';;



const App: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string[]>([]);
  const formStyle = {
    padding: 24,
  };
  const handleRegionChange = (value: string[], selectedOptions: any) => {
    // 处理地区选择事件，可以将选择的地区存储在 state 中
    setSelectedRegion(value);
  };
  const handleSubmit = (values: any) => {
    // 处理表单提交
    console.log('Success:', values);
  };
  return <>
    <div style={{ width: '100%', border: '1px solid 000' }}>

      <Divider />
      <YSForm onFinish={handleSubmit} style={formStyle} formLayout="horizontal" name="basic">
        {/* 在这里注入其他组件 */}
        <div>
          <h1 style={{ textAlign: 'center' }}>事件管理</h1>
          <h3 className="title-h3">
            基本信息
          </h3>
          <Divider />
          <YSFormItem label={<span className="label-text-fixed-width">标题</span>} name="title" rules={[{ required: true }]}>
            <YSInput />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">描述</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <Row gutter={16}>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">事件编号</span>}
                name="eventNumber000"
                rules={[{ required: true, message: '请输入电话' }, { pattern: /0?(13|14|15|18|17)[0-9]{9}$/, message: '请输入有效的手机号码' }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">登记人</span>}
                name="eventNumber00"
                rules={[{ required: true }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">登记时间</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">发现渠道人</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">报告人</span>}

                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
          </Row>
          <h3 className="title-h3">
            处理信息
          </h3>
          <Divider />
          <Row gutter={16}>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">状态</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">影响系统</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">发现时间</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSDatePicker />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">处理组</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">子类</span>}

                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">发生时间</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSDatePicker />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">处理人</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">区域</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">上报时间</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">影响</span>}

                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">处理优先级</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">处置完成时间</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">紧急程度</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8} offset={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">问题解决时间</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
          </Row>

          <h3 className="title-h3">
            原因分析
          </h3>
          <Divider />
          <YSFormItem label={<span className="label-text-fixed-width">原因分类</span>} name="desc" rules={[{ required: true }]}>
            <YSSelect />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">做的好及幸运的地方</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">触发条件及原因分析</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <h3 className="title-h3">
            恢复过程
          </h3>
          <Divider />
          <YSFormItem label={<span className="label-text-fixed-width">回复代码</span>} name="desc" rules={[{ required: true }]}>
            <YSSelect />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">恢复过程描述</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">可用性影响初步评估</span>} name="desc" rules={[{ required: true }]}>
            <YSSelect />
          </YSFormItem >
          <Row gutter={16}>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">主要跟进团队</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">可用性跟进人</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">协助跟进团队</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSInput />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">业务恢复时间</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">受影响时长</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">可用性定级</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">业务影响比例</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={8}>
              <YSFormItem
                label={<span className="label-text-fixed-width">责任团队及承担比例</span>}
                name="eventNumber"
                rules={[{ required: true }]}
              >
                <YSSelect options={[]} />
              </YSFormItem>
            </Col>
            <Col span={24}>
              <YSFormItem label={<span className="label-text-fixed-width">业务影响概述</span>} name="desc" rules={[{ required: true }]}>
                <YSTextArea />
              </YSFormItem >
            </Col>
          </Row>
          <h3 className="title-h3">
            影响分析
          </h3>
          <Divider />
          <YSFormItem label={<span className="label-text-fixed-width">合法合规</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">公司业务</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">信息系统</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">影响声誉</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">其他</span>} name="desc" rules={[{ required: true }]}>
            <YSTextArea />
          </YSFormItem >
          <h3 className="title-h3">
            附件上传
          </h3>
          <Divider />
          <YSFormItem label={<span className="label-text-fixed-width">附件上传</span>} name="title" rules={[{ required: true }]}>
            <YSUpload />
          </YSFormItem >
          <YSFormItem label={<span className="label-text-fixed-width">图片上传</span>} name="title" rules={[{ required: true }]}>
            <YSUpload />
          </YSFormItem >
          <YSFormItem >
            <YSButton type="primary" htmlType="submit">
              提交
            </YSButton>
          </YSFormItem >
        </div>
        {/* 可以添加更多内容 */}
      </YSForm>
    </div>
  </>

}



export default App;