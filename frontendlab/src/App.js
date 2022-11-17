import './App.css';
import React from 'react';
import Header from './components/Header'
import Sidenav from './components/Sidenav';
import Profil from './Profile/Profil';
import Module from './Module/Module';
import TambahModul from './Module/TambahModul';
import Schedule from './Schedule/Schedule';
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
          <Route path='/profil' element={<Profil/>}/>
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
