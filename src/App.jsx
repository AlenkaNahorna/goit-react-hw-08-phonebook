import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from 'hooks/useAuth';
import PublicRoute from 'hocs/PublicRoute';
import PrivateRoute from 'hocs/PrivateRoute';
import { Loader } from 'components/ui/Loader/Loader';
import { operations } from 'redux/authSlice';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));
const Layout = lazy(() => import('layout/Layout'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            path="/"
            element={<PublicRoute component={<Home />} />}
          />
          <Route
            path="signUp"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<SignUp />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute
                restricted
                redirectTo="contacts"
                component={<LogIn />}
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
