
import { useState } from 'react';

type BaseButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string | '';
  style?: object;
}

export const BaseButton = ({children, onClick, style={}, className='',}: BaseButtonProps) => {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      // ボタンが無効状態であれば何もしない
      if (isDisabled) return;

      // 親コンポーネントから渡されたクリックイベント関数を実行
      onClick(e);
      
      // ボタンを無効化
      setIsDisabled(true);

      // 1秒後にボタンを再び有効化
      setTimeout(() => {
        setIsDisabled(false);
      }, 1000);
    };

    
    return (
        <button className={`a-Btn ${className}`} style={style} onClick={handleClick} disabled={isDisabled}>
          {children}
        </button>

    )
} 
