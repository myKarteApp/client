type Error = {
  [key: string]: string;
};

export class Validator {
  error: Error = {};
  ok: OK = {};
  constructor() {
    this.error = {};
  }
  public pushError(key: string, message: string) {
    this.error[key] = message;
  }
  public hasError() {
    return Object.keys(this.error).length > 0;
  }
}

export const validateEmail = (validator: Validator, email?: string) => {
  if (email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validator.pushError('email', 'emailを正しく入力しください。');
    } else if (validator.error['email']) {
      delete validator.error['email'];
    }
  } else {
    validator.pushError('email', 'emailを入力しください。');
  }
};

export const validatePassword = (validator: Validator, password?: string) => {
  if (password) {
    if (Object.keys(password).length < 8) {
      validator.pushError(
        'password',
        'passwordを8文字以上で記載してください。',
      );
    } else if (validator.error['password']) {
      delete validator.error['password'];
    }
  } else {
    validator.pushError('password', 'passwordを入力してください。');
  }
};

export const validateConfirmPassword = (
  validator: Validator,
  password?: string,
  confirmPassword?: string,
) => {
  if (password && confirmPassword) {
    if (password !== confirmPassword) {
      validator.pushError(
        'confirmPassword',
        'パスワードと確認用パスワードが一致しません',
      );
    } else if (validator.error['confirmPassword']) {
      delete validator.error['confirmPassword'];
    }
  } else {
    validator.pushError(
      'confirmPassword',
      'パスワードと確認用パスワードが一致しません',
    );
  }
};
