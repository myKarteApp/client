import { AuthDefaultClient } from '@/domain/account/auth/default/api';
import { validateConfirmPassword, validateDefaultAuth, Validator } from '@/shared';
import { useRef, useState } from 'react';

export const useHookOfAuthDefaultCreate = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const displayedErrorList = useRef<string[]>([]);
  const validator = useRef(new Validator());
  const client = useRef(new AuthDefaultClient());

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const dto = {
      email: email,
      password: password,
    };

    validateDefaultAuth(dto, validator.current);
    validateConfirmPassword(validator.current ,password, confirmPassword);
    if (validator.current.hasError()) {

      // エラーを表示する
      Object.keys(validator.current.error).forEach((key) => {
        if (key === 'email') setEmailError(validator.current.error[key]);
        if (key === 'password') setPasswordError(validator.current.error[key])
        if (key === 'confirmPassword') setConfirmPasswordError(validator.current.error[key])
      });

      // 正常な入力のところのエラーを消す
      const difference = displayedErrorList.current.filter(item => !Object.keys(validator.current.error).includes(item));
      difference.forEach((key) => {
        if (key === 'email') setEmailError('');
        if (key === 'password') setPasswordError('')
        if (key === 'confirmPassword') setConfirmPasswordError('')
      });

      // 初期化する
      displayedErrorList.current = Object.keys(validator.current.error);
      validator.current.error = {};
      return;
    }

    // エラーを消す
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // apiを実行する
    const authId = await client.current.createAuthDefault(dto);

    console.log(authId);
  };

  return {
    email,
    password,
    confirmPassword,

    emailError,
    passwordError,
    confirmPasswordError,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit,
  }
};
