import './App.css';
import React from 'react';
import Header from './components/Header'
import Sidenav from './components/Sidenav';
import Profile from './Profile/Profile';
import Module from './Module/Module';
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
          <Route path='/' element={<Profile/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/module' element={<Module/>}/>
          <Route path='/schedule' element={<Schedule/>}/>
        </Routes>
      </Sidenav>
      </BrowserRouter>
    </div>
  );
};

export default App;
