import React from 'react';
import Modal from './components/Modal';
import NotFound from './components/NotFound';
//import Profile from './pages/Profile/Profile';
import Student from './pages/Profile/Student';
import TambahProfil from './pages/Profile/TambahProfile'
import EditProfile  from './pages/Profile/EditProfile';
import Module from './pages/Module/Module';
import TambahModul from './pages/Module/tambahmodule';
import EditModul from './pages/Module/EditModule';
import Schedule from './Schedule/Schedule';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login';
import WithoutSidenav from './components/WithoutSidenav';
import WithSidenav from './components/WithSidenav';
import HomepageUsers from './pages/Homepage/HomepageUsers';
import ModuleUsers from './pages/Module/ModuleUsers';
import ProfileUsers from './pages/Profile/ProfileUsers';
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
          <Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/admin-home' element={<Homepage/>}/>
            <Route path='/admin-profile' element={<Student/>}/>
            <Route path='/admin-profile/tambahprofile' element={<TambahProfil/>}/>
            <Route path='/admin-profile/editprofile/:_id' element={<EditProfile/>}/>
            <Route path='/admin-module' element={<Module/>}/>
            <Route path='admin-module/tambahmodul' element={<TambahModul />} />
            <Route path='admin-module/editmodul/:_id' element={<EditModul />} />
            <Route path='/home' element={<HomepageUsers/>}/>
            <Route path='/module' element={<ModuleUsers/>}/>
            <Route path='/profile' element={<ProfileUsers/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;