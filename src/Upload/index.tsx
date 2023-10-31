import React, { memo } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import './styles/index.less' // 引入样式

interface YSUploadProps {
  /** 按钮类型 */
  children?: React.ReactNode;
  fileList?: any;
  action?: any;
  listType?: any;
  onChange?: any;
}



/** Upload组件 */
const YSUpload: React.FC<YSUploadProps> = memo((props) => {
  const { listType = 'picture', action, fileList, children, onChange} = props
  return (
    <Upload
      action={action}
      listType={listType}
      defaultFileList={fileList}
      onChange={onChange}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>{children}</Button>
    </Upload>
  );
});



export default memo(YSUpload);
