import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layouts/Layout';
import { PrivateRoute } from '../Routes/PrivateRoute';
import { RestrictedRoute } from '../Routes/RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/PhoneBook/PhoneBook'));

const basename = '/goit-react-hw-08-phonebook';

const getPath = path => `${basename}/${path}`;

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Refreshing user...</b>
  ) : (
    <Routes>
      <Route path={basename} element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path={getPath('register')}
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/phonebook"
              component={<Register />}
            />
          }
        />
        <Route
          path={getPath('login')}
          element={
            <RestrictedRoute
              redirectTo={getPath('phonebook')}
              component={<Login />}
            />
          }
        />
        <Route
          path={getPath('phonebook')}
          element={
            <PrivateRoute
              redirectTo={getPath('login')}
              component={<Contacts />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
