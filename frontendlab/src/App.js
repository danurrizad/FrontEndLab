import './App.css';
import React from 'react';
import Header from './components/Header'
import Sidenav from './components/Sidenav';
import Module from './Module/Module';
import TambahModul from './Module/TambahModul';
import Schedule from './Schedule/Schedule';
import Student from './Profile/Student';
import TambahProfil from './Profile/TambahProfil';
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
          <Route path='/module' element={<Module/>}/>
          <Route path="/tambahmodul" element={<TambahModul />} />
          <Route path='/schedule' element={<Schedule/>}/>
        </Routes>
      </Sidenav>
      </BrowserRouter>
    </div>
  );
};

export default App;
