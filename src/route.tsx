import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Home from './pages/Home';
import Investment from './pages/Investment';
import Loan from './pages/Loan';

import UserMemberDetail from './components/admin/UserDetail/UserMemberDetail';

import NotFound from './pages/NotFound';
import Login from './pages/login/Login';
import ForgotAccount from './pages/login/ForgotAccount';

import Admin from './pages/admin/Admin';
import LoginRegister from './pages/login/LoginRegister';
import Certification from './pages/login/Certification';
import UserRegister from './pages/admin/UserRegister';
import UserWithdrawalHistory from './components/admin/UserDetail/UserWithdrawalHistory';
import UserTransferHistory from './components/admin/UserDetail/UserTransferHistory';

import UserAccounts from './components/admin/UserDetail/UserAccounts';
import UserRegisterAccount from './components/admin/UserDetail/UserRegisterAccount';

import UserMyPage from './pages/user/UserMyPage';

import AccountList from './pages/admin/account/AccountList';
import AccountRegister from './pages/admin/account/AccountRegister';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'investment',
        element: <Investment />,
      },
      {
        path: 'loan',
        element: <Loan />,
      },
      {
        path: 'userMemberDetail/:id',
        element: <UserMemberDetail />,
      },
      {
        path: 'userWithdrawalHistory/:id',
        element: <UserWithdrawalHistory />,
      },
      {
        path: 'userTransferHistory/:id',
        element: <UserTransferHistory />,
      },
      {
        path: 'userAccounts/:id',
        element: <UserAccounts />,
      },
      {
        path: 'userRegisterAccount/:id',
        element: <UserRegisterAccount />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgot-account',
        element: <ForgotAccount />,
      },
      {
        path: 'register',
        element: <LoginRegister />,
      },
      {
        path: 'usermypage',
        element: <UserMyPage />,
      },
      {
        path: 'certification',
        element: <Certification />,
      },
    ],
  },
  {
    path: '/admin',
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Admin />,
      },
      {
        path: 'account',
        element: <AccountList />,
      },
      {
        path: 'insertAccount',
        element: <AccountRegister />,
      },
      {
        path: 'insertUser',
        element: <UserRegister />,
      },
    ],
  },
]);

export default router;
