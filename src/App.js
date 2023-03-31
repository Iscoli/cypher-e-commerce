 import React from 'react';
 import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
 import { Provider } from 'react-redux';
 import store from './Redux/store'
 import Home from './Pages/Home'
 import Profile from './Pages/Profile';
 import SignIn from './Pages/SignIn';
 import SignUp from './Pages/SignUp';
 import ForgotPwd from './Pages/ForgotPwd';
 import NotFound from './Pages/NotFound';
 import PrivateRoute from './components/Parts/PrivateRoute';
 import DashBoard from './Pages/DashBoard';
 import Orders from './Pages/Orders'
 import LogOut from './Pages/LogOut';
 import ChangePwd from './Pages/ChangePwd';

function App() {
  return (
    <Provider store={store}>
    <Router> 
    
    <Routes>
    
      <Route path='/' element={<Home/>} />
      <Route path='/DashBoard'  element={<PrivateRoute/>}>
      <Route path='/DashBoard' element={<DashBoard/>}>
      <Route  index element={<Orders/>} /> 
      <Route path='profile' element={<Profile/>} />
      <Route path='Changepwd' element={<ChangePwd />} />
      <Route path='Orders' element={<Orders />} />
      <Route path='Logout' element={<LogOut />} />
      </Route>
      </Route>
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/forgot-password' element={<ForgotPwd/>} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
   
    

</Router>
</Provider>
     
  );
}

export default App;
