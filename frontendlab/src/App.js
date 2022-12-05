import './App.css';
import React from 'react';
import Header from './components/Header'
import Sidenav from './components/Sidenav';
import Module from './Module/Module';
import TambahModul from './Module/tambahmodule';
import EditModul from './Module/EditModule';
import Schedule from './Schedule/Schedule';
import Student from './Profile/Student';
import TambahProfil from './Profile/TambahProfil';
import Homepage from './Homepage/Homepage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
      <Sidenav>
        <Routes>
          <Route path='/profil' element={<Student/>}/>
          <Route path='/tambahprofil' element={<TambahProfil/>}/>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/module' element={<Module/>}/>
          <Route path="/tambahmodul" element={<TambahModul />} />
          <Route path="module/editmodul/:_id" element={<EditModul />} />
          <Route path='/schedule' element={<Schedule/>}/>
        </Routes>
      </Sidenav>
      </BrowserRouter>
    </div>
  );
};

export default App;