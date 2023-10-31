import React, { memo } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import './styles/index.less' // 引入样式
// import 'dayjs/locale/zh-cn';

import locale from 'antd/es/date-picker/locale/zh_CN';

interface YSDatePickerProps {
  onChange?: any;
  showTime?: any;
   /** 按钮类型 */
   value?: any;
}



/** input组件 */
const YSDatePicker: React.FC<YSDatePickerProps> = memo((props) => {
  const { onChange, showTime, value } = props
  const handleDateChange = (date: any, dateString: string) => {
      onChange(date, dateString); // 传递日期字符串给父组件
  };
  return (
    <DatePicker locale={locale} value={value} onChange={handleDateChange} showTime={showTime}/>
  );
});



export default memo(YSDatePicker);
