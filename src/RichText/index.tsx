
// import React, { memo } from 'react';
// // import { Radio, Space } from 'antd';
// import BraftEditor from 'braft-editor';
// import 'braft-editor/dist/index.css';
// interface YSRichTextProps {
//   value?: string;
//   onChange?: any;
// }

// const YSRichText: React.FC<YSRichTextProps> = (props) => {

//   const { value, onChange } = props
//   const handleChange = (editorState: any) => {
//     // 将富文本内容对象传递给 onChange
//     if (onChange && typeof onChange === 'function') {
//       onChange(editorState);
//     }
//   }
//   return (
//     <div className="editor-wrapper" style={{ border: '1px solid #d1d1d1' }}>
//       <BraftEditor
//         value={value}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default memo(YSRichText);