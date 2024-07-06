import { BaseLayout } from '@/layout/BaseLayout';
import { useHookOfAuthDefaultCreate } from './hook';
import { BaseButton } from '@/components/Button';

export const AuthDefaultCreate = () => {
  const {
    email,
    password,
    confirmPassword,
    emailError,
    passwordError,
    confirmPasswordError,
    handleEmail,
    handlePassword,
    handleConfirmPassword,
    handleSubmit
  } = useHookOfAuthDefaultCreate();

  return (
    <BaseLayout>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">新規登録</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                メールアドレス <span>{emailError}</span>
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="メールアドレスを入力してください"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                パスワード <span>{passwordError}</span>
              </label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="パスワードを入力してください"
                value={password}
                onChange={handlePassword}
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                パスワード（確認用）<span>{confirmPasswordError}</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="パスワードをもう一度入力してください"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                required
              />
            </div>
            <div className="flex justify-center">
              <BaseButton
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                登録
              </BaseButton>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};