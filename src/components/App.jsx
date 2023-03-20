import { useAuth } from 'hooks/hooks';
import { lazy,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route,Routes } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/operations';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';



const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage  = lazy(()=>import('../pages/Register'));
const LoginPage = lazy(()=>import('../pages/Login/Login'));
const ContactsPage = lazy(()=>import("../pages/Contacts/Contacts"));

export const App = ()=>{
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth;

  useEffect(()=>{
    dispatch(refreshUser());
  },[dispatch]);

  return  isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
  <Routes>
    <Route path = '/' element = {<Layout/>}>
      <Route index element = {<HomePage/>}/> 
      <Route path = '/register' element={<RestrictedRoute  component={<RegisterPage/> } redirectTo="/contacts"/>}/>
      <Route path='/login' element = {<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts" />}/>
      <Route path = '/contacts' element = {<PrivateRoute component={<ContactsPage/> } redirectTo="/login"  /> }/>
    </Route> 
  </Routes>)
  
}


