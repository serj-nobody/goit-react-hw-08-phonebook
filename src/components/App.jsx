import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentUser } from 'redux/Auth/auth-operations';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { NavBar } from "./NavBar/NavBar";

import { CircularProgress } from '@mui/material';
import css from "./App.module.css"

const HomePage = lazy(() => import ('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import ('../pages/AuthPage/AuthPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import ('../pages/ContactsPage/ContactsPage'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser())
  }, [dispatch]);

  return (
    <div className={css.appContainer}>
      <div className={css.app}>
        <NavBar />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/register' element={<AuthPage />} />
              <Route path='/login' element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path='/contacts' element={<ContactsPage />} />
            </Route>
          </Routes>
        </Suspense>  
      </div>
    </div>

  );
};