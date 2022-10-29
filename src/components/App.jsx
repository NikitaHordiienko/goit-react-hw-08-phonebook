import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authThunks';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from '../routes/PrivateRoute';
import { PublicRoute } from '../routes/PublicRoute';
import AppBar from "./AppBar/AppBar";
import Loader from './Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshig = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    !isRefreshig && 
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/register" element={<PublicRoute redirectTo='/contacts' component={<Register />} />} />
            <Route path="/login" element={<PublicRoute redirectTo='/contacts' component={<Login />} />} />
            <Route path="/contacts" element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={1500} theme="colored" />
      </>
  );
}