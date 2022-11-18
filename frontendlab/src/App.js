import './App.css';
import React from 'react';
import Header from './components/header'
import Sidenav from './components/sidenav';
import Profile from './Profile/profile';
import Module from './Module/module';
import TambahModul from './Module/tambahmodule';
import EditModul from './Module/editmodule';
import Schedule from './Schedule/schedule';
import Homepage from './Homepage/homepage';
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