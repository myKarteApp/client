import { Route, Routes } from 'react-router-dom';
import { Error404, TopPage } from '@/pages';
import { errorRoutingConfig } from '@/routes/error';
import { AuthDefaultCreate } from '@/pages/account/auth/default/create/component';

export const AppRoutes = () => {
  return (
    <Routes>
      {Object.entries(setRouter()).map(([path, element]) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Error404 />} /> {/* 404 エラーページ */}
    </Routes>
  );
};

const setRouter = (): {[key: string]: React.ReactNode;} => {
  return {
    '': <TopPage />,
    '/admin/:userId/account/create': <TopPage />,
    '/admin/:userId/account': <TopPage />,
    '/admin/:userId/account/:targetUserId': <TopPage />,
    // 詳細画面で対応する
    // '/admin/:userId/account/:targetUserId/update': <TopPage />,
    // 一覧画面と詳細で対応する
    // '/admin/:userId/account/:targetUserId/delete': <TopPage />,
    // 一覧画面で対応する
    // '/admin/:userId/account/bulkDelete': <TopPage />,
    '/account/auth/default/create': <AuthDefaultCreate />,
    '/account/auth/default/login': <TopPage />,
    // モーダルで対応する
    // '/account/auth/default/logout': <TopPage />,
    '/account/:authId/user/create': <TopPage />,
    // redirectする
    '/account/auth/verify': <TopPage />,
  }
};
