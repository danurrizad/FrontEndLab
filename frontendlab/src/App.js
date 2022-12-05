import './App.css';
import React from 'react';
import Modal from './components/Modal';
import NotFound from './components/NotFound';
import Profile from './pages/Profile/Profile';
import Module from './pages/Module/Module';
import TambahModul from './pages/Module/tambahmodule';
import EditModul from './pages/Module/EditModule';
import Schedule from './Schedule/Schedule';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import WithoutSidenav from './components/WithoutSidenav';
import WithSidenav from './components/WithSidenav';
import {
  BrowserRouter,
  Routes,
  Route,
} 
from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutSidenav/>}>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>

          <Route element={<WithSidenav/>}>
            <Route path='/home' element={<Homepage/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/module' element={<Module/>}/>
            <Route path='module/tambahmodul' element={<TambahModul />} />
            <Route path='module/editmodul/:_id' element={<EditModul />} />
            <Route path='/schedule' element={<Schedule/>}/>
            <Route path='/modal' element={<Modal/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;