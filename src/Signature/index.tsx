import React, { memo, useRef, useEffect } from 'react';
import './styles/index.less' // 引入样式
import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'antd';
interface YSSignatureProps {
  onSave: (signatureData: string) => void; // 保存签名的回调函数
  canvasProps?: any;
  signatureRefValue?: any;
}

/** Upload组件 */
const YSSignature: React.FC<YSSignatureProps> = memo((props) => {
  const { onSave, canvasProps, signatureRefValue } = props
  const signatureRef = useRef<any | null>(signatureRefValue);
  useEffect(() => {
    if (signatureRefValue && signatureRef.current) {
      signatureRef.current.fromDataURL(signatureRefValue);
    }
  }, [signatureRefValue]);

  // 处理保存签名的方法
  const handleSaveSignature = () => {
    if (signatureRef.current) {
      const signatureData = signatureRef.current.toDataURL(); // 将签名保存为DataURL
      onSave(signatureData)
    }
  };

  // 清除签名
  const handleClearSignature = () => {
    if (signatureRef.current) {
      signatureRef.current.clear();
    }
  };

  return (
    <div>
      <SignatureCanvas
        ref={signatureRef}
        penColor="black" // 可以设置笔的颜色
        canvasProps={canvasProps} // 设置Canvas的尺寸和样式
      />
      <div>
        <Button type="primary" onClick={handleSaveSignature}>保存签名</Button>
        <Button onClick={handleClearSignature}>清除签名</Button>
      </div>
    </div>
  );
});



export default memo(YSSignature);
