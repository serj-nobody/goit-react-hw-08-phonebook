import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from 'redux/Auth/auth-operations';
import { getToken } from 'redux/Auth/auth-selectors';

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { NavBar } from "./NavBar/NavBar";

import { ToastContainer, Zoom } from 'react-toastify';
import { Box, CircularProgress } from '@mui/material';
import css from "./App.module.css"

const HomePage = lazy(() => import ('../pages/HomePage/HomePage'));
const AuthPage = lazy(() => import ('../pages/AuthPage/AuthPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const NotFoundPage = lazy(() => import ('../pages/NotFoundPage/NotFoundPage'));



export function App() {
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token !== '') {
      dispatch(currentUser())
    }
  }, [dispatch, token]);

  return (
    <div className={css.appContainer}>
      <Box className={css.app}>
        <NavBar />
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path='/' element={<HomePage />} />
              <Route path='/register' element={<AuthPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path='/contacts' element={<ContactsPage />} />
            </Route>
          </Routes>
        </Suspense>  
      </Box>
      <ToastContainer
        enableMultiContainer
        containerId={'login'}
        className={css.toastContainer}
        toastClassName={css.toastWrapper}
        bodyClassName={css.toastBody}
        style={{ left: '50%', transform: 'translateX(-50%)', top: '350px', margin: '0', padding: '0 16px' }}
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
        closeButton={false}
        theme='colored'
        transition={Zoom}
      />
      <ToastContainer
        enableMultiContainer
        containerId={'reg'}
        className={css.toastContainer}
        toastClassName={css.toastWrapper}
        bodyClassName={css.toastBody}
        style={{ left: '50%', transform: 'translateX(-50%)', top: '410px', margin: '0', padding: '0 16px' }}
        position="top-center"
        hideProgressBar={true}
        autoClose={3000}
        closeButton={false}
        theme='colored'
        transition={Zoom}
      />
    </div>

  );
};